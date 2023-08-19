import { fail, redirect } from "@sveltejs/kit";
import type { Action, Actions, PageServerLoad } from './$types';
import bcrypt from 'bcrypt';
import prisma from "$lib/server/prisma";

export const load: PageServerLoad = async ({ locals }) => {
    if (locals.user) {
        throw redirect(307, '/admin')
    }
}

const login: Action = async ({ cookies, request }) => {
    const data = await request.formData()
    const username = data.get('username')
    const password = data.get('password')

    if (
        typeof username !== 'string' ||
        typeof password !== 'string' ||
        !username ||
        !password
    ) {
        return fail(400, { mensagem: "As informações enviadas são inválidas!", invalid: true })
    }

    const user = await prisma.user.findUnique({ where: { username }})

    if (!user) {
        return fail(400, { mensagem: "Credenciais erradas!", credentials: true })
    }

    const userPassword = await bcrypt.compare(password, user.passwordHash)

    if (!userPassword) {
        return fail(400, { mensagem: "Credenciais erradas!", credentials: true})
    }

    const authenticatedUser = await prisma.user.update({
        where: { username: user.username },
        data: { 
            userAuthToken: crypto.randomUUID() 
        }
    })

    cookies.set('session', authenticatedUser.userAuthToken, {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 30,
    })

    throw redirect(302, '/')
}

export const actions: Actions = { login };
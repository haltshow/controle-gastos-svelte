import { fail, redirect } from "@sveltejs/kit";
import type { Action, Actions, PageServerLoad } from './$types';
import bcrypt from 'bcrypt';

export const load:PageServerLoad = async () => {

}

const register: Action = async ({request}) => {
    const data = await request.formData()
    const username = data.get('username')
    const password = data.get('password')
    const name = data.get('name')

    if (
        typeof username !== 'string' ||
        typeof password !== 'string' ||
        typeof name !== 'string' ||
        !username ||
        !password ||
        !name
    ) {
        return fail(400, { mensagem: "As informações enviadas são inválidas. Todas precisam ser string!"})
    }

    const user = await prisma.user.findUnique({
        where: { username }
    });

    if (user) {
        return fail(400, { mensagem: "Esse usuário já existe no sistema!", user: true})
    }

    try {
        await prisma.user.create({
            data: {
                username,
                name,
                passwordHash: await bcrypt.hash(password, 10),
                userAuthToken: crypto.randomUUID()
            }
        })
    } catch (err) {
        console.log(err)
        return fail(500, { mensagem: "Ocorreu um erro ao tentar criar o usuário!"})
    }

    throw redirect(303, '/login');
}

export const actions: Actions = { register };
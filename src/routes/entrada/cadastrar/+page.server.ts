import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import prisma from "$lib/server/prisma";

export const load: PageServerLoad = async ({ locals }) => {
    if (!locals.user) {
        throw redirect(302, '/login')
    }
    if (locals.user.username == 'demo') {
        throw redirect(302, '/entrada')
    }
    return {
        origemEntrada: await prisma.origemEntrada.findMany({
            where: {
                idUser: locals.user.id
            }
        })
    }
};

export const actions: Actions = {
    createEntrada: async ({ request, locals }) => {
        const { origem, valor } = Object.fromEntries(await request.formData()) as {
            origem: any,
            valor: any
        }

        try {
            const response = await prisma.entrada.create({
                data: {
                    idOrigem: Number(origem),
                    valor: Number(valor),
                    idUser: locals.user.id
                }
            })
            return { success: true };
        } catch(err) {
            console.log(err)
            return fail(500, {message: "Não foi possível criar a entrada!"})
        }

    }
};
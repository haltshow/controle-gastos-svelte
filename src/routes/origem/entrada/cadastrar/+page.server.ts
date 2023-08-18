import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import prisma from "$lib/server/prisma";

export const load: PageServerLoad = async ({ locals }) => {
    if (!locals.user) {
        throw redirect(302, '/login')
    }
    if (locals.user.username == 'demo') {
        throw redirect(302, '/origem/entrada')
    }
};

export const actions: Actions =  {
    createOrigem: async ({ request, locals }) => {
        const { nome } = Object.fromEntries(await request.formData()) as {
            nome: any,
        }

        try {
            await prisma.origemEntrada.create({
                data: {
                    nome,
                    idUser: locals.user.id
                }
            })

            return {
                success: true
            }
        } catch(err) {
            console.log(err)
            return fail(500, {message: "Não foi possível criar a entrada!"})
        }

    }
};
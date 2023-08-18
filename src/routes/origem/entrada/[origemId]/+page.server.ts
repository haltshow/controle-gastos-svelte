import { fail, type Actions, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import prisma from "$lib/server/prisma";

export const load: PageServerLoad = async ({ params, locals }) => {
    if (!locals.user) {
        throw redirect(302, '/login')
    }
    const getOrigem = async () => {
      
        const entrada : any = await prisma.origemEntrada.findUnique({
            where: {
                id: Number(params.origemId),
            },
        });
    
        if (!entrada) {
            return fail(500, { message: 'Não foi possível editar.'})
        }

        return entrada
    }

    return {
        origemEntrada: getOrigem(),
    }
};

export const actions: Actions = {
    editOrigem: async ({ request, params }) => {
        const { origem } = Object.fromEntries(await request.formData()) as {
            origem: any
        }

        try {
            const response = await prisma.origemEntrada.update({
                where: {
                    id: Number(params.origemId)
                },
                data: {
                    nome: origem,
                }
            })

            return { success: true }
        } catch(err) {
            console.log(err)
            return fail(500, {message: "Não foi possível editar a entrada!"})
        }

    }
};
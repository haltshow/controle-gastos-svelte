import { fail, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { prisma } from "$lib/server/prisma";

export const load: PageServerLoad = async ({ params }) => {
    const getOrigem = async () => {
      
        const saida : any = await prisma.origemSaida.findUnique({
            where: {
                id: Number(params.origemId),
            },
        });
    
        if (!saida) {
            return fail(500, { message: 'Não foi possível editar.'})
        }

        return saida
    }

    return {
        origemSaida: getOrigem(),
    }
};

export const actions: Actions = {
    editOrigem: async ({ request, params }) => {
        const { origem } = Object.fromEntries(await request.formData()) as {
            origem: any
        }

        try {
            const response = await prisma.origemSaida.update({
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
            return fail(500, {message: "Não foi possível editar a origem saida!"})
        }

    }
};
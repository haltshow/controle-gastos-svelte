import { fail, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { prisma } from "$lib/server/prisma";

export const load: PageServerLoad = async ({ params }) => {
    const getSaida = async () => {
      
        const saida : any = await prisma.saida.findUnique({
            where: {
                id: Number(params.saidaId),
            },
            select: {
                valor: true,
                origem: true,
            }
        });
    
        if (!saida) {
            return fail(500, { message: 'Não foi possível editar.'})
        }

        return saida
    }

    return {
        origemSaida: await prisma.origemSaida.findMany(),
        saida: getSaida(),
    }
};

export const actions: Actions = {
    editSaida: async ({ request, params }) => {
        const { origem, valor } = Object.fromEntries(await request.formData()) as {
            origem: any,
            valor: any
        }

        try {
            const response = await prisma.saida.update({
                where: {
                    id: Number(params.saidaId)
                },
                data: {
                    idOrigem: Number(origem),
                    valor: Number(valor)
                }
            })
            console.log("response: ", response);
        } catch(err) {
            console.log(err)
            return fail(500, {message: "Não foi possível editar a saida!"})
        }

        return {
            status: 200
        }
    }
};
import { fail, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { prisma } from "$lib/server/prisma";

export const load: PageServerLoad = async () => {
    const getSaidas = async () => {
      
        const saidas = await prisma.saida.findMany({
            include: {
                origem: true,
            }
        });
    
        if (!saidas) {
            return fail(500, { message: 'Não foi possível trazer todas as saidas.'})
        }

        return saidas
    }

    return {
        saidas: getSaidas(),
    }
};

export const actions: Actions = {
    deleteSaida: async ({ url } : any) => {
        const id = url.searchParams.get("id");
        if (!id) {
            return fail(400, {mensagem: 'Requisição inválida. Passe um número como id.'});
        }

        try {
            await prisma.saida.delete({
                where: {
                    id: Number(id)
                }
            })
        } catch (err) {
            console.log(err)
            return fail(500, { mensagem: 'Algo deu errado ao tentar excluir a saida'});
        }

        return {
            status: 201
        }
    }
};
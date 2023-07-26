import { fail, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { prisma } from "$lib/server/prisma";

export const load: PageServerLoad = async () => {
    const getOrigens : any = async () => {
      
        const origens = await prisma.origemEntrada.findMany();
    
        if (!origens) {
            return fail(500, { message: 'Não foi possível trazer todas as entradas.'})
        }

        return origens
    }

    return {
        origens: getOrigens(),
    }
};

export const actions: Actions = {
    deleteOrigem: async ({ url } : any) => {
        const id = url.searchParams.get("id");
        if (!id) {
            return fail(400, {mensagem: 'Requisição inválida. Passe um número como id.'});
        }

        try {
            await prisma.origemEntrada.delete({
                where: {
                    id: Number(id)
                }
            })
        } catch (err) {
            console.log(err)
            return fail(500, { mensagem: 'Algo deu errado ao tentar excluir a origem entrada'});
        }

        return {
            status: 201
        }
    }
};
import { fail, type Actions, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import prisma from "$lib/server/prisma";

export const load: PageServerLoad = async ({ locals }) => {
    if (!locals.user) {
        throw redirect(302, '/login')
    }
    const getEntradas : any = async () => {
      
        const entradas = await prisma.entrada.findMany({
            include: {
                origem: true,
            },
            where: {
                idUser: locals.user.id
            }
        });
    
        if (!entradas) {
            return fail(500, { message: 'Não foi possível trazer todas as entradas.'})
        }

        return entradas
    }

    return {
        entradas: getEntradas(),
    }
};

export const actions: Actions = {
    deleteEntrada: async ({ url } : any) => {
        const id = url.searchParams.get("id");
        if (!id) {
            return fail(400, {mensagem: 'Requisição inválida. Passe um número como id.'});
        }

        try {
            await prisma.entrada.delete({
                where: {
                    id: Number(id)
                }
            })
        } catch (err) {
            console.log(err)
            return fail(500, { mensagem: 'Algo deu errado ao tentar excluir a entrada'});
        }

        return {
            status: 201
        }
    }
};
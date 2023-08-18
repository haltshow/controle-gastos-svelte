import { fail, type Actions, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { prisma } from "$lib/server/prisma";

export const load: PageServerLoad = async ({ params, locals }) => {
    if (!locals.user) {
        throw redirect(302, '/login')
    }
    const getEntrada = async () => {
      
        const entrada : any = await prisma.entrada.findUnique({
            where: {
                id: Number(params.entradaId),
            },
            select: {
                valor: true,
                origem: true,
            }
        });
    
        if (!entrada) {
            return fail(500, { message: 'Não foi possível editar.'})
        }

        return entrada
    }

    return {
        origemEntrada: await prisma.origemEntrada.findMany(),
        entrada: getEntrada(),
    }
};

export const actions: Actions = {
    editEntrada: async ({ request, params }) => {
        const { origem, valor } = Object.fromEntries(await request.formData()) as {
            origem: any,
            valor: any
        }

        try {
            const response = await prisma.entrada.update({
                where: {
                    id: Number(params.entradaId)
                },
                data: {
                    idOrigem: Number(origem),
                    valor: Number(valor)
                }
            })
            
            return { success: true }
        } catch(err) {
            console.log(err)
            return fail(500, {message: "Não foi possível editar a entrada!"})
        }

    }
};
import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
    if (!locals.user) {
        throw redirect(302, '/login')
    }
    if (locals.user.username == 'demo') {
        throw redirect(302, '/saida')
    }
    return {
        origemSaida: await prisma.origemSaida.findMany({
            where: {
                idUser: locals.user.id
            }
        })
    }
};

export const actions: Actions = {
    createSaida: async ({ request, locals }) => {
        const { origem, valor } = Object.fromEntries(await request.formData()) as {
            origem: any,
            valor: any
        }

        try {
            await prisma.saida.create({
                data: {
                    idOrigem: Number(origem),
                    valor: Number(valor),
                    idUser: locals.user.id
                }
            })
        } catch(err) {
            console.log(err)
            return fail(500, {message: "Não foi possível criar a saida!"})
        }

        return {
            success: true,
            status: 201
        }
    }
};
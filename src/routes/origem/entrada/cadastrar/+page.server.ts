import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return {
        origemEntrada: await prisma.origemEntrada.findMany()
    }
};

export const actions: Actions = {
    createOrigem: async ({ request }) => {
        const { nome } = Object.fromEntries(await request.formData()) as {
            nome: any,
        }

        try {
            await prisma.origemEntrada.create({
                data: {
                    nome: nome,
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
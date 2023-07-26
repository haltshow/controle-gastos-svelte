import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const actions: Actions = {
    createOrigem: async ({ request }) => {
        const { nome } = Object.fromEntries(await request.formData()) as {
            nome: any,
        }

        try {
            await prisma.origemSaida.create({
                data: {
                    nome: nome,
                }
            })
        } catch(err) {
            console.log(err)
            return fail(500, {message: "Não foi possível criar a origem saida!"})
        }

        return {
            status: 201
        }
    }
};
import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return {
        origemSaida: await prisma.origemSaida.findMany()
    }
};

export const actions: Actions = {
    createSaida: async ({ request }) => {
        const { origem, valor } = Object.fromEntries(await request.formData()) as {
            origem: any,
            valor: any
        }

        try {
            const response = await prisma.saida.create({
                data: {
                    idOrigem: Number(origem),
                    valor: Number(valor)
                }
            })
            console.log("response: ", response);
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
import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return {
        origemEntrada: await prisma.origemEntrada.findMany()
    }
};

export const actions: Actions = {
    createEntrada: async ({ request }) => {
        const { origem, valor } = Object.fromEntries(await request.formData()) as {
            origem: any,
            valor: any
        }

        try {
            const response = await prisma.entrada.create({
                data: {
                    idOrigem: Number(origem),
                    valor: Number(valor)
                }
            })
            return { success: true };
        } catch(err) {
            console.log(err)
            return fail(500, {message: "Não foi possível criar a entrada!"})
        }

    }
};
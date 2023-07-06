import { fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { prisma } from "$lib/server/prisma";

export const load: PageServerLoad = async () => {
    const getEntradas = async () => {
      
        const entradas = await prisma.entrada.findMany({
            include: {
                origem: true,
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
import { fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { prisma } from "$lib/server/prisma";

export const load: PageServerLoad = async () => {
    return {
        entradas: await prisma.entrada.findMany(),
    }
};

// export const actions: Actions = {
//     getEntradas: async({  }) => {
//         try {
//             await prisma.entrada.findMany();
//         } catch (err) {
//             console.log(err)
//             return fail(500, { message: 'Não foi possível trazer todas as entradas.'})
//         }
//         return {
//             status: 201
//         }
//     }
// };
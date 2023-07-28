import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { auth } from "$lib/server/lucia";

// export const load: PageServerLoad = async ({ locals }) => {
//     const session = await locals.validate()
//     if (session) {
//         throw redirect(302, "/");
//     }
// };

export const actions: Actions = {
    default: async ({ request } : any) => {
        const { name, username, password } = Object.fromEntries(
            await request.formData(),
        ) as Record<string, string>

        console.log("name: ", name);

        try {
            await auth.createUser({
                key: {
                    providerId: "username",
                    providerUserId: username.toLowerCase(),
                    password
                },
                attributes: {
                    name,
                    username
                }
            })
        } catch (err) {
            console.log(err)
            return fail(400, { mensagem: "Não foi possível registrar o usuário!"});
        }
        throw redirect(302, 'login')
    }
}
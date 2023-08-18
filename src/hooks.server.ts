import type { Handle } from '@sveltejs/kit'
import prisma from "$lib/server/prisma";

export const handle: Handle = async ({ event, resolve}) => {
    const session = event.cookies.get('session')

    if (!session) {
        return await resolve(event)
    }

    console.log("session: ", session);

    const user = await prisma.user.findUnique({
        where: { userAuthToken: session },
        select: { id: true, name: true, username: true }
    })

    console.log("user: ", user);

    if (user) {
        event.locals.user = {
            id: user.id,
            name: user.name,
            username: user.username
        }
    }

    return await resolve(event)
}
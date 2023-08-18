import type { Handle } from '@sveltejs/kit'
import prisma from "$lib/server/prisma";

export const handle: Handle = async ({ event, resolve}) => {
    const session = event.cookies.get('session')

    if (!session) {
        return await resolve(event)
    }

    const user = await prisma.user.findUnique({
        where: { userAuthToken: session },
        select: { id: true, name: true, username: true }
    })

    if (user) {
        event.locals.user = {
            id: user.id,
            name: user.name,
            username: user.username
        }
    } else {
        event.locals.user = {
            id: '',
            name: '',
            username: ''
        }
    }

    return await resolve(event)
}
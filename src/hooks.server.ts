import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve}) => {
    const session = event.cookies.get('session')

    if (!session) {
        return await resolve(event)
    }

    const user = await prisma.user.findUnique({
        where: { userAuthToken: session },
        select: { name: true }
    })

    if (user) {
        event.locals.user = {
            name: user.name
        }
    }

    return await resolve(event)
}
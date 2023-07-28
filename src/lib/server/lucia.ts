import lucia from "lucia-auth";
import { prisma } from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";
import { dev } from "$app/environment";
import { sveltekit } from "lucia-auth/middleware";

const client = new PrismaClient();

export const auth = lucia({
	adapter: prisma(client),
    env: dev ? "DEV" : "PROD",
    middleware: sveltekit(),

	getUserAttributes: (data : any) => {
		return {
			username: data.username,
            name: data.name
		};
	}
});

export type Auth = typeof auth;
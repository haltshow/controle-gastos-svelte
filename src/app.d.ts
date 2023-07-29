// See https://kit.svelte.dev/docs/types#app

import type { PrismaClient } from "@prisma/client";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: {
				name: String
			}
		}
		// interface PageData {}
		// interface Platform {}
	}
	var prisma: PrismaClient
}

export {};

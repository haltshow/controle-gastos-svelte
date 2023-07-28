// See https://kit.svelte.dev/docs/types#app

import type { PrismaClient } from "@prisma/client";

// for information about these interfaces
/// <reference types="lucia" />
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			validate: import("@lucia-auth/sveltekit").Validate
			validateUser: import("@lucia-auth/sveltekit").ValidateUser
			setSession: import("@lucia-auth/sveltekit").SetSession
		}
		// interface PageData {}
		// interface Platform {}
	}
	var prisma: PrismaClient

	namespace Lucia {
		type Auth = import("$lib/server/lucia").Auth
		type DatabaseUserAttributes = {
			username: string;
			name: string;
		};
		type DatabaseSessionAttributes = {};
	}
}

export {};

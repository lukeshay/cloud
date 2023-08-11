import { env } from "node:process"
import { z } from "zod"

export const environment = z
	.object({
		AWS_PROFILE: z.string().nullable().optional(),
		CLOUDFLARE_ACCOUNT_ID: z.string().min(1),
		CLOUDFLARE_API_TOKEN: z.string().min(1),
		NAMECHEAP_API_KEY: z.string().min(1),
	})
	.parse(env)

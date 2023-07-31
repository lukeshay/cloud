import { Zone } from "@pulumi/cloudflare"
import { CLOUDFLARE_ACCOUNT_ID } from "../lib/config"

new Zone(
	"lukeshay-com",
	{
		accountId: CLOUDFLARE_ACCOUNT_ID,
		plan: "free",
		zone: "lukeshay.com",
	},
	{
		protect: true,
	},
)

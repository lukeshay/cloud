import { Zone } from "@pulumi/cloudflare"
import { CLOUDFLARE_ACCOUNT_ID } from "../lib/config"

const zone = new Zone(
	"lshay-xyz",
	{
		accountId: CLOUDFLARE_ACCOUNT_ID,
		plan: "free",
		zone: "lshay.xyz",
	},
	{
		protect: true,
	},
)

const outputs = {
	nameServers: zone.nameServers,
}

export { outputs }

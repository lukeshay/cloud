import { Zone } from "@pulumi/cloudflare"
import { CLOUDFLARE_ACCOUNT_ID } from "../lib/config"

const zone = new Zone(
	"lshay-land",
	{
		accountId: CLOUDFLARE_ACCOUNT_ID,
		plan: "free",
		zone: "lshay.land",
	},
	{
		protect: true,
	},
)

const outputs = {
	nameServers: zone.nameServers,
}

export { outputs }

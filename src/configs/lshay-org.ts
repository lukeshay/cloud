import { Zone } from "@pulumi/cloudflare"
import { CLOUDFLARE_ACCOUNT_ID } from "../lib/config"

const zone = new Zone(
	"lshay-org",
	{
		accountId: CLOUDFLARE_ACCOUNT_ID,
		plan: "free",
		zone: "lshay.org",
	},
	{
		protect: true,
	},
)

const outputs = {
	nameServers: zone.nameServers,
}

export { outputs }

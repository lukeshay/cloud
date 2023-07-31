import { Zone, Record } from "@pulumi/cloudflare"
import { CLOUDFLARE_ACCOUNT_ID } from "../lib/config"

const zone = new Zone(
	"lshay-cc",
	{
		accountId: CLOUDFLARE_ACCOUNT_ID,
		plan: "free",
		zone: "lshay.cc",
	},
	{
		protect: true,
	},
)

new Record("ui-cname", {
	name: "ui",
	proxied: false,
	type: "CNAME",
	value: "lukeshay.github.io",
	zoneId: zone.id,
})

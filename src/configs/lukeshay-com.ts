import { Zone } from "@pulumi/cloudflare";

new Zone(
	"lukeshay-com",
	{
		plan: "free",
		zone: "lukeshay.com",
	},
	{
		protect: true,
	},
);

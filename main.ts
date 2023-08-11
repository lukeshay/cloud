import { App } from "cdktf"

import { CloudflareZonesStack } from "./lib/stacks/CloudflareZoneStack"
import { EmailAccountsStack } from "./lib/stacks/EmailAccountsStack"
import { BaseTerraformStackProperties } from "./lib/stacks/BaseTerraformStack"

const app = new App()

const baseProperties: BaseTerraformStackProperties = {}

const cloudflareZoneStack = new CloudflareZonesStack(app, "cloudflareZones", {
	...baseProperties,
})

new EmailAccountsStack(app, "emailAccounts", {
	...baseProperties,
	zones: cloudflareZoneStack.zones,
})

app.synth()

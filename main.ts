import { App } from "cdktf"

import { CloudflareZonesStack } from "./lib/stacks/CloudflareZoneStack"
import { LShayDevStack } from "./lib/stacks/LShayDevStack"
import { BaseTerraformStackProperties } from "./lib/stacks/BaseTerraformStack"
import { LShayCcStack } from "./lib/stacks/LShayCCStack"
import { LShayLandStack } from "./lib/stacks/LShayLandStack"
import { LShayOrgStack } from "./lib/stacks/LShayOrgStack"
import { LShayXyzStack } from "./lib/stacks/LShayXyzStack"

const app = new App()

const baseProperties: BaseTerraformStackProperties = {}

const cloudflareZoneStack = new CloudflareZonesStack(app, "cloudflareZones", {
	...baseProperties,
})

new LShayCcStack(app, "lshayCc", {
	...baseProperties,
	zones: cloudflareZoneStack.zones,
})

new LShayDevStack(app, "lshayDev", {
	...baseProperties,
	zones: cloudflareZoneStack.zones,
})

new LShayLandStack(app, "lshayLand", {
	...baseProperties,
	zones: cloudflareZoneStack.zones,
})

new LShayOrgStack(app, "lshayOrg", {
	...baseProperties,
	zones: cloudflareZoneStack.zones,
})

new LShayXyzStack(app, "lshayXyz", {
	...baseProperties,
	zones: cloudflareZoneStack.zones,
})

app.synth()

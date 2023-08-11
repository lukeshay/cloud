import { Construct } from "constructs"

import {
	BaseTerraformStack,
	BaseTerraformStackProperties,
} from "./BaseTerraformStack"
import { PrivateEmailCloudflareConstruct } from "../constructs/PrivateEmailCloudflareConstruct"
import { CloudflareZonesStack } from "./CloudflareZoneStack"

export type EmailAccountsStackProperties = BaseTerraformStackProperties & {
	zones: CloudflareZonesStack["zones"]
}

export class EmailAccountsStack extends BaseTerraformStack {
	public constructor(
		scope: Construct,
		id: string,
		props: EmailAccountsStackProperties,
	) {
		super(scope, id, props)

		new PrivateEmailCloudflareConstruct(this, "lshayDevPrivateEmail", {
			zone: props.zones.lshayDev.zone,
		})
	}
}

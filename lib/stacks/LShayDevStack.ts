import { Construct } from "constructs"

import {
	BaseTerraformStack,
	BaseTerraformStackProperties,
} from "./BaseTerraformStack"
import { PrivateEmailCloudflareConstruct } from "../constructs/PrivateEmailCloudflareConstruct"
import { CloudflareZonesStack } from "./CloudflareZoneStack"
import { GitHubVerifiedCloudflareDomainConstruct } from "../constructs/GitHubVerifiedCloudflareDomainConstruct"

export type LShayDevStackProperties = BaseTerraformStackProperties & {
	zones: CloudflareZonesStack["zones"]
}

export class LShayDevStack extends BaseTerraformStack {
	public constructor(
		scope: Construct,
		id: string,
		props: LShayDevStackProperties,
	) {
		super(scope, id, props)

		new GitHubVerifiedCloudflareDomainConstruct(
			this,
			"lshayDevGitHubVerifiedCloudflareDomain",
			{
				subdomain: "_github-pages-challenge-lukeshay",
				txtValue: "176257800080a5579a3c94bd4ee445",
				zone: props.zones.lshayDev.zone,
			},
		)

		new PrivateEmailCloudflareConstruct(this, "lshayDevPrivateEmail", {
			zone: props.zones.lshayDev.zone,
		})
	}
}

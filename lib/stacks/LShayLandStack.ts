import { Construct } from "constructs"

import {
	BaseTerraformStack,
	BaseTerraformStackProperties,
} from "./BaseTerraformStack"
import { CloudflareZonesStack } from "./CloudflareZoneStack"
import { GitHubVerifiedCloudflareDomainConstruct } from "../constructs/GitHubVerifiedCloudflareDomainConstruct"
import { GitHubPagesCloudflareDomainConstruct } from "../constructs/GitHubPagesCloudflareDomainConstruct"

export type LShayLandStackProperties = BaseTerraformStackProperties & {
	zones: CloudflareZonesStack["zones"]
}

export class LShayLandStack extends BaseTerraformStack {
	public constructor(
		scope: Construct,
		id: string,
		props: LShayLandStackProperties,
	) {
		super(scope, id, props)

		new GitHubVerifiedCloudflareDomainConstruct(
			this,
			"lshayLandGitHubVerifiedCloudflareDomain",
			{
				subdomain: "_github-pages-challenge-lukeshay",
				txtValue: "07f7961032705bd6c179eb1abbbecf",
				zone: props.zones.lshayLand.zone,
			},
		)

		new GitHubPagesCloudflareDomainConstruct(
			this,
			"lshayLandUIGitHubPagesCloudflareDomain",
			{
				organization: "lukeshay",
				repository: "ui",
				subdomain: "ui",
				zone: props.zones.lshayLand.zone,
			},
		)
	}
}

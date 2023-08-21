import { Construct } from "constructs"

import {
	BaseTerraformStack,
	BaseTerraformStackProperties,
} from "./BaseTerraformStack"
import { CloudflareZonesStack } from "./CloudflareZoneStack"
import { GitHubVerifiedCloudflareDomainConstruct } from "../constructs/GitHubVerifiedCloudflareDomainConstruct"

export type LShayOrgStackProperties = BaseTerraformStackProperties & {
	zones: CloudflareZonesStack["zones"]
}

export class LShayOrgStack extends BaseTerraformStack {
	public constructor(
		scope: Construct,
		id: string,
		props: LShayOrgStackProperties,
	) {
		super(scope, id, props)

		new GitHubVerifiedCloudflareDomainConstruct(
			this,
			"lshayOrgGitHubVerifiedCloudflareDomain",
			{
				subdomain: "_github-pages-challenge-lukeshay",
				txtValue: "e89dedeff94eca2e3572f64d039707",
				zone: props.zones.lshayOrg.zone,
			},
		)
	}
}

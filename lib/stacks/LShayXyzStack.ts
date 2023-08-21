import { Construct } from "constructs"

import {
	BaseTerraformStack,
	BaseTerraformStackProperties,
} from "./BaseTerraformStack"
import { CloudflareZonesStack } from "./CloudflareZoneStack"
import { GitHubVerifiedCloudflareDomainConstruct } from "../constructs/GitHubVerifiedCloudflareDomainConstruct"

export type LShayXyzStackProperties = BaseTerraformStackProperties & {
	zones: CloudflareZonesStack["zones"]
}

export class LShayXyzStack extends BaseTerraformStack {
	public constructor(
		scope: Construct,
		id: string,
		props: LShayXyzStackProperties,
	) {
		super(scope, id, props)

		new GitHubVerifiedCloudflareDomainConstruct(
			this,
			"lshayXyzGitHubVerifiedCloudflareDomain",
			{
				subdomain: "_github-pages-challenge-lukeshay",
				txtValue: "258c4ef472de401805fd184a306e2c",
				zone: props.zones.lshayXyz.zone,
			},
		)
	}
}

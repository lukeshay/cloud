import { Construct } from "constructs"

import {
	BaseTerraformStack,
	BaseTerraformStackProperties,
} from "./BaseTerraformStack"
import { CloudflareZonesStack } from "./CloudflareZoneStack"
import { GitHubVerifiedCloudflareDomainConstruct } from "../constructs/GitHubVerifiedCloudflareDomainConstruct"

export type LShayCcStackProperties = BaseTerraformStackProperties & {
	zones: CloudflareZonesStack["zones"]
}

export class LShayCcStack extends BaseTerraformStack {
	public constructor(
		scope: Construct,
		id: string,
		props: LShayCcStackProperties,
	) {
		super(scope, id, props)

		new GitHubVerifiedCloudflareDomainConstruct(
			this,
			"lshayCcGitHubVerifiedCloudflareDomain",
			{
				subdomain: "_github-pages-challenge-lukeshay",
				txtValue: "e4df395dccaeff1ba602db6ea481d5",
				zone: props.zones.lshayCc.zone,
			},
		)
	}
}

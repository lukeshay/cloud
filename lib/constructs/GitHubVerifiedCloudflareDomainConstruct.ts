import { Zone } from "@cdktf/provider-cloudflare/lib/zone"
import { Record } from "@cdktf/provider-cloudflare/lib/record"
import { Construct } from "constructs"

export type GitHubVerifiedCloudflareDomainConstructProperties = {
	subdomain: string
	txtValue: string
	zone: Zone
}

export class GitHubVerifiedCloudflareDomainConstruct extends Construct {
	public constructor(
		scope: Construct,
		id: string,
		props: GitHubVerifiedCloudflareDomainConstructProperties,
	) {
		super(scope, id)

		const { zone, subdomain, txtValue } = props

		new Record(this, "txt", {
			comment: "GitHub verification",
			name: subdomain,
			proxied: false,
			type: "TXT",
			value: txtValue,
			zoneId: zone.id,
		})
	}
}

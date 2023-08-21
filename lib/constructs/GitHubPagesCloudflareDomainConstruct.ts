import { Record, RecordConfig } from "@cdktf/provider-cloudflare/lib/record"
import { Zone } from "@cdktf/provider-cloudflare/lib/zone"
import { Construct } from "constructs"

export type GitHubPagesCloudflareDomainConstructProperties = {
	organization: string
	repository: string
	subdomain: string
	zone: Zone
	cdk?: {
		record?: RecordConfig
	}
}

export class GitHubPagesCloudflareDomainConstruct extends Construct {
	public readonly record: Record

	public constructor(
		scope: Construct,
		id: string,
		props: GitHubPagesCloudflareDomainConstructProperties,
	) {
		super(scope, id)

		const { cdk, organization, repository, subdomain, zone } = props

		this.record = new Record(this, "record", {
			comment: `GitHub pages domain for https://github.com/${organization}/${repository}`,
			name: subdomain,
			type: "CNAME",
			value: `${organization}.github.io`,
			zoneId: zone.id,
			...cdk?.record,
		})
	}
}

import { Construct } from "constructs"

import { DomainKey, Domains } from "../domains"
import {
	NamecheapCloudflareZoneConstruct,
	NamecheapCloudflareZoneConstructProperties,
} from "../constructs/NamecheapCloudflareZoneConstruct"
import { environment } from "../environment"
import {
	BaseTerraformStack,
	BaseTerraformStackProperties,
} from "./BaseTerraformStack"

export type CloudflareZonesStackProperties = BaseTerraformStackProperties & {}

export class CloudflareZonesStack extends BaseTerraformStack {
	public readonly zones: Record<DomainKey, NamecheapCloudflareZoneConstruct>

	public constructor(
		scope: Construct,
		id: string,
		props: CloudflareZonesStackProperties,
	) {
		super(scope, id, props)

		const commonProps = {
			cloudflareAccountId: environment.CLOUDFLARE_ACCOUNT_ID,
			cdk: {
				domainRecords: {
					mode: "OVERWRITE",
				},
				zone: {
					plan: "free",
					type: "full",
				},
			},
		} satisfies Partial<NamecheapCloudflareZoneConstructProperties>

		this.zones = Object.fromEntries(
			Object.entries(Domains).map(([key, domain]) => [
				key,
				new NamecheapCloudflareZoneConstruct(this, key, {
					...commonProps,
					domain,
				}),
			]),
		) as Record<DomainKey, NamecheapCloudflareZoneConstruct>
	}
}

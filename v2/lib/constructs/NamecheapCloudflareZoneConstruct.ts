import { Zone, ZoneConfig } from "@cdktf/provider-cloudflare/lib/zone"
import { Construct } from "constructs"

import {
	DomainRecords,
	DomainRecordsConfig,
} from "../../.gen/providers/namecheap/domain-records"

export type NamecheapCloudflareZoneConstructProperties = {
	cloudflareAccountId: string
	cdk?: {
		domainRecords?: Omit<DomainRecordsConfig, "domain" | "nameservers">
		zone?: Omit<ZoneConfig, "zone" | "accountId">
	}
	domain: string
}

export class NamecheapCloudflareZoneConstruct extends Construct {
	public readonly zone: Zone
	public readonly domainRecords: DomainRecords

	public constructor(
		scope: Construct,
		id: string,
		props: NamecheapCloudflareZoneConstructProperties,
	) {
		super(scope, id)

		const { cloudflareAccountId, domain, cdk } = props

		this.zone = new Zone(this, "zone", {
			...cdk?.zone,
			zone: domain,
			accountId: cloudflareAccountId,
		})

		this.domainRecords = new DomainRecords(this, "domainRecords", {
			...cdk?.domainRecords,
			domain: domain,
			nameservers: this.zone.nameServers,
		})
	}
}

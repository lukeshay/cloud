import { Zone } from "@cdktf/provider-cloudflare/lib/zone"
import { Record } from "@cdktf/provider-cloudflare/lib/record"
import { Construct } from "constructs"

export type PrivateEmailCloudflareConstructProperties = {
	zone: Zone
}

export class PrivateEmailCloudflareConstruct extends Construct {
	public constructor(
		scope: Construct,
		id: string,
		props: PrivateEmailCloudflareConstructProperties,
	) {
		super(scope, id)

		const { zone } = props

		new Record(this, "mx1", {
			name: "@",
			priority: 10,
			proxied: false,
			type: "MX",
			value: "mx1.privateemail.com",
			zoneId: zone.id,
			comment: "privateemail.com verification",
		})

		new Record(this, "mx2", {
			name: "@",
			priority: 10,
			proxied: false,
			type: "MX",
			value: "mx2.privateemail.com",
			zoneId: zone.id,
			comment: "privateemail.com verification",
		})

		new Record(this, "txt", {
			comment: "privateemail.com verification",
			name: "@",
			proxied: false,
			type: "TXT",
			value: "v=spf1 include:spf.privateemail.com ~all",
			zoneId: zone.id,
		})

		new Record(this, "dmarc", {
			name: "_dmarc",
			proxied: false,
			type: "TXT",
			value: `v=DMARC1;  p=none; rua=mailto:dmarc-reports@${zone.zone}`,
			zoneId: zone.id,
		})
	}
}

import { CloudflareProvider } from "@cdktf/provider-cloudflare/lib/provider"
import { S3Backend, TerraformStack } from "cdktf"
import { Construct } from "constructs"

import { NamecheapProvider } from "../../.gen/providers/namecheap/provider"
import { environment } from "../environment"

export type BaseTerraformStackProperties = {}

export class BaseTerraformStack extends TerraformStack {
	public readonly namecheap: NamecheapProvider
	public readonly cloudflare: CloudflareProvider
	public readonly backend: S3Backend

	constructor(
		scope: Construct,
		id: string,
		_props: BaseTerraformStackProperties,
	) {
		super(scope, id)

		this.namecheap = new NamecheapProvider(this, "namecheap", {
			apiKey: environment.NAMECHEAP_API_KEY,
			apiUser: "lukeshay",
			userName: "lukeshay",
			useSandbox: false,
		})

		this.cloudflare = new CloudflareProvider(this, "cloudflare", {
			apiToken: environment.CLOUDFLARE_API_TOKEN,
		})

		this.backend = new S3Backend(this, {
			bucket: "lukeshay-cloud-terraform-state",
			key: `state/${id}`,
			region: "us-west-2",
		})
	}
}

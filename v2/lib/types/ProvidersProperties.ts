import { TerraformProvider } from "cdktf"

export type ProvidersProperties = {
	cloudflare: TerraformProvider
	namecheap: TerraformProvider
}

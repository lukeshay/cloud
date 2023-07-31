import { Config } from "@pulumi/pulumi"

const config = new Config()

const CLOUDFLARE_ACCOUNT_ID = config.requireSecret("cloudflare:accountId")

export { config, CLOUDFLARE_ACCOUNT_ID }

import { Config } from "@pulumi/pulumi"

const config = new Config()

const CLOUDFLARE_ACCOUNT_ID = config.requireSecret("cloudflareAccountId")

export { config, CLOUDFLARE_ACCOUNT_ID }

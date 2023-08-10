export const Domains = {
	lshayCc: "lshay.cc",
	lshayDev: "lshay.dev",
	lshayLand: "lshay.land",
	lshayOrg: "lshay.org",
	lshayXyz: "lshay.xyz",
	lukeshayNet: "lukeshay.net",
	lukeshayOrg: "lukeshay.org",
} as const

export type DomainKey = keyof typeof Domains
export type Domain = (typeof Domains)[DomainKey]

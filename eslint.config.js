import { createConfig } from "@lshay/eslint-config-flat"

export default [
	...createConfig({
		node: true,
		parserOptions: {
			project: ["./tsconfig.json"],
		},
		prettier: true,
	}),
]

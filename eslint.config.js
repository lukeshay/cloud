const { createConfig } = require("@lshay/eslint-config-flat")

module.exports = [
	...createConfig({
		node: true,
		parserOptions: {
			project: ["./tsconfig.json"],
		},
		prettier: true,
	}),
]

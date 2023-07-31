import { readFileSync } from "node:fs"

export { outputs as lukeshayComOutputs } from "./configs/lukeshay-com"
export { outputs as lshayCcOutputs } from "./configs/lshay-cc"
export { outputs as lshayDevOutputs } from "./configs/lshay-dev"
export { outputs as lshayLandOutputs } from "./configs/lshay-land"
export { outputs as lshayOrgOutputs } from "./configs/lshay-org"
export { outputs as lshayXyzOutputs } from "./configs/lshay-xyz"

export const readme = readFileSync("./README.md").toString("utf-8")

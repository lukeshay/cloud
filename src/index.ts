import { readFileSync } from "node:fs"

import "./configs/lukeshay-com"
import "./configs/lshay-cc"
import "./configs/lshay-dev"
import "./configs/lshay-land"
import "./configs/lshay-org"
import "./configs/lshay-xyz"

export const readme = readFileSync("./README.md").toString("utf-8")

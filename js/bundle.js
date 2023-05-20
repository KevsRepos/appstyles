#!/usr/bin/env node
import * as fs from 'node:fs/promises'

const md = process.argv.includes('--md')
const ios = process.argv.includes('--ios')

if((md && ios) || (!md && !ios)) {
    throw new Error("You can either specify --md or --ios")
}

let platform;

if(md) platform = "md"
if(ios) platform = "ios"

const walkDir = "css";

const imports = "compiled/imports.scss"

fs.writeFile(imports, "")

const putFiles = async (directory) => {
    const dir = await fs.readdir(directory)

    for (const entry of dir) {
        const isDir = (await fs.stat(directory + "/" + entry)).isDirectory()
    
        if(isDir) {
            putFiles(directory + "/" + entry)
        }

        if(!entry.startsWith(`${platform}-`)) {
            continue
        }

        fs.appendFile(imports, `@import "../${directory + "/" + entry}";\n`)
    }
}

putFiles(walkDir)
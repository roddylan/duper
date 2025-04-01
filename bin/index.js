#!/usr/bin/env node

const yargs = require("yargs");
const fs = require('node:fs');
const path = require('node:path');

// TODO: make file positional
const options = yargs
    .usage("Usage: $0 -f <file> [-n <duplicate name>]")
    .option("f", {
        alias:"file", describe:"File to duplicate", type:"string", demandOption:true
    })
    .option("n", {
        alias:"name", describe:"Set duplicate name", type:"string", demandOption:false
    })
    .help(true)
    .argv;


try {
    fs.access(options["f"], fs.constants.F_OK, (err) => {
        if (err) {
            console.error(err);
        }
    });
    const src = options["f"];
    if (options.hasOwnProperty("name")) {
        let dest = options["name"];
        fs.copyFile(src, dest, (err) => {
            if (err) throw err;
        });

    } else {
        fs.realpath(src, (err, res) => {
            if (err) throw err;
            
            let po = path.parse(res);
            po.name = `${po.name} copy`;
            po.base = `${po.name}${po.ext}`;
            fs.copyFile(src, path.format(po), (err) => {
                if (err) throw err;
            });
        });

    }

    // fs.copyFile()
} catch (e) {
    console.error(e);
}
#!/usr/bin/env node

const yargs = require("yargs");
const fs = require('node:fs');

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

    let file = fs.open(options["f"], "r", (err, fd) => {
        if (err) {
            throw err;
        }
        try {
            console.log(fd);
        } finally {
            fs.close(fd, (err) => {
                if (err) {
                    throw err;
                }
            });
        }
    });
} catch (e) {
    console.error(e);
}
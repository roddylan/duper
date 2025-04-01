#!/usr/bin/env node

const yargs = require("yargs");

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


console.log(options)
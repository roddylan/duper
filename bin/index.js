// import yargs, { usage } from "yargs";
const yargs = require("yargs");
const fs = require('node:fs/promises');

// TODO: make file positional
const options = yargs
    .usage(usage)
    .option("f", {
        alias:"file", describe:"File to duplicate", type:"string", demandOption:"true"
    })
    .option("-n", {
        alias:"name", describe:"Set duplicate name", type:"string", demandOption:"false"
    })
    .help(true)
    .argv;




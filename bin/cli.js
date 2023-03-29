#! /usr/bin/env node
console.log('mycli is running');

const { program } = require('commander');

require('../lib/core/help.js')(program);
require('../lib/core/commander.js')(program);

// name 必选 <> 里面是必选参数 [name] 意思就是可选参数

program.parse(process.argv);

#! /usr/bin/env node

const { program } = require('commander');
console.log('mycli is running');

// if (process.argv[2] == '--help') {
//   console.log('获取到了--help参数');
// }

// name 必选 <> 里面是必选参数 [name] 意思就是可选参数
program.option('-h, --help <name>', '帮助信息');

program.parse(process.argv);

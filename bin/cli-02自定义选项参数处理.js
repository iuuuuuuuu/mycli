#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const { program } = require('commander');
console.log('mycli is running');

// if (process.argv[2] == '--help') {
//   console.log('获取到了--help参数');
// }

// name 必选 <> 里面是必选参数 [name] 意思就是可选参数
program.option('-h, --help <name>', '帮助信息');

program
  .command('create <app-name> [other...]')
  .alias('crt')
  .description('创建一个新项目')
  .action((name, args) => {
    // 命令行的执行逻辑代码
    console.log('创建项目', name, args, __dirname);
  });

program.parse(process.argv);

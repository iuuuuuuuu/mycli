const myAction = require('./action');
const mycommander = (program) => {
  program
    .command('create <app-name> [other...]')
    .alias('crt')
    .description('创建一个新项目')
    .action(myAction);
};

module.exports = mycommander;

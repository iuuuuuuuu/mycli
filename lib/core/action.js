const inquirer = require('inquirer');
const { frameworks } = require('../../config');
const myDownloadFun = require('./download');
const myAction = async (name, args) => {
  // 命令行的执行逻辑代码
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'framework',
      choices: frameworks,
      message: '请选择你要使用的框架',
    },
  ]);
  // 下载模板
  myDownloadFun(answer.framework, name);
};

module.exports = myAction;

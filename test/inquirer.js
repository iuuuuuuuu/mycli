const inquirer = require('inquirer');
inquirer
  .prompt([
    // 问题
    {
      type: 'input',
      name: 'username',
      message: '请输入名字',
    },
  ])
  .then((answers) => {
    console.log(answers);
  });

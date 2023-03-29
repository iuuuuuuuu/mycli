const download = require('download-git-repo');
const { frameworkUrls } = require('../../config');
const ora = require('ora');
const chalk = require('chalk');
const log = console.log;
const myDownloadFun = (framework, name) => {
  const spinner = ora('正在下载中...').start();
  // 下载代码模版
  download(
    `direct:${frameworkUrls[framework]}`,
    name,
    { clone: true },
    function (err) {
      if (err) {
        spinner.fail(`Error:${err}`);
        return;
      } else {
        spinner.succeed('Success:下载成功!');
        log(chalk.green('Done! you run:'));
        log(chalk.green(`cd ${name} && npm install && npm run dev`));
      }
    }
  );
};

module.exports = myDownloadFun;

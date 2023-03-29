const myhelp = (program) => {
  // name 必选 <> 里面是必选参数 [name] 意思就是可选参数
  program.option('-h, --help <name>', '帮助信息');
};

module.exports = myhelp;

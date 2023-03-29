const download = require('download-git-repo');
// github下载
download('github:nuxt-community/express-template', './xxx', function (err) {
  console.log(err ? `Error:${err}` : 'Success');
});

// gitee下载
download(
  `direct:${frameworkUrls[answer.framework]}`,
  name,
  { clone: true },
  function (err) {
    console.log(err ? `Error:${err}` : '下载成功 Success!');
  }
);

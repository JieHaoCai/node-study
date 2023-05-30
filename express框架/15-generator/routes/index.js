var express = require('express');
// 用来处理文件上传的
const formidable = require('formidable');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});



//显示网页的（表单）
router.get('/portrait', function (req, res, next) {
  //响应网页用render函数
  res.render('portrait', { title: '文件上传' })
})


//处理文件上传
router.post('/portrait', function (req, res, next) {

  //创建表单对象
  const form = formidable({
    multiples: true,
    // 设置保存文件的目录
    uploadDir: './public/images',
    // 保留文件扩展名
    keepExtensions: true
  });
  //解析请求报文
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }

    //服务器保存该图片的访问url
    //images/08fc10a668d51303586052c00.jpg
    let url = '/images/' + files.portrait.newFilename;//将来将此数据保存在数据库中


    res.send('文件上传成功' + url);
  });
})


module.exports = router;

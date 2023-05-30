var express = require('express');
var router = express.Router();


const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(__dirname + '/../data/db.json')
//获取db对象
const db = low(adapter)

//导入shortid 
const shortid = require('shortid')



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//记账本列表
router.get('/accountList', function (req, res, next) {
  res.render('list');
})

//添加记录
router.get('/account/create', function (req, res, next) {
  res.render('create');
})

//获取请求体的数据
router.post('/account', function (req, res, next) {
  console.log(req.body);

  //生成id
  let id = shortid.generate();
  //添加到lowdb中去
  db.get('accounts').unshift({ id: id, ...req.body }).write()


  res.send('ok');
})


//删除
router.get('/account/:id', function (req, res, next) {
  let id = req.params.id
  db.get('accounts').remove({ id: id }).write()
  res.send('删除成功');
})



module.exports = router;

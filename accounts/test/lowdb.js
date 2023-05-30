const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
//获取db对象
const db = low(adapter)

// Set some defaults
//初始化对象
db.defaults({ posts: [], user: {} }).write()

// Add a post
db.get('posts').push({ id: 1, title: 'lowdb is awesome' }).write()

// Set a user using Lodash shorthand syntax
db.set('user.name', 'typicode').write()

//删除数据
// db.get('posts').remove({ id: 1 }).write()

//获取单条数据
//let res =  db.get('posts').find({ id: 1 })
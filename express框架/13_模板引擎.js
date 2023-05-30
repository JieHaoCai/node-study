//ejs

const ejs = require('ejs');
//字符串
let china = '中国'


let result = ejs.render('我爱你 <%= china %>', { china })

//前后端分离，没必要学这个了

const fs = require('fs');

fs.mkdir('./test', (err) => { 
    if (err) {
        console.log('创建失败');
        return
    }
    console.log('创建成功');
})
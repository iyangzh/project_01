const itheima = require('./meiha-tools')

//格式化时间功能
const dtStr = itheima.dateFormat(new Date())
console.log(dtStr)

const htmlStr = '<h1>这是h1标签</h1>'
const str = itheima.HTMLEscape(htmlStr)
console.log(str)

const str2 = itheima.HTMLUnEscape(str)
console.log(str2)
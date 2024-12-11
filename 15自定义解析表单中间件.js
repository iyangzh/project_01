const express = require('express')
const app = express()

//导入解析模块
const qs = require('querystring')

//自定义中间件
app.use((req,res,next) => {
    //中间件业务逻辑
    //监听req的data事件
    let str = ''
    req.on('data', (chunk) => {
        str += chunk
    })
    //监听req的事件
    req.on('end', () => {
        //str中存放的是完整的请求体
        //console.log(str)
        //解析字符串为对象格式
        const body = qs.parse(str)
        // console.log(body)
        req.body = body
        next()
    })
    
})

//路由
app.post('/user', (req,res) => {
    console.log(req.body)
})

app.listen(80, ()=> {
    console.log("express server running at 127.0.0.1")
})
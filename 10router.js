//导入模块
const express = require('express')
//创建路由对象
const router = express.Router()
//挂载路由对象
router.get('/user/list',(req,res) => {
    res.send('Get user list')
})
router.post('/user/add',(req,res) => {
    res.send('Add new user')
})

//向外导出
module.exports = router

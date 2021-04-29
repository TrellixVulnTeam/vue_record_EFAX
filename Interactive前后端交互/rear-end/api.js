const express = require('express')
const expr = express()
const cors = require("cors")
expr.use(cors())
// 路由
expr.get('/data', (req,res)=>{
    res.send('Hi,zairesinatra')
})
expr.get('/zs', (req,res)=>{
    res.send('Hi.zs')
})
expr.get('/xzy', (req,res)=>{
    res.send('Hi')
})
expr.get('/xzyfetch', (req,res)=>{
    res.send('Hi,xzyfetch')
})
expr.get('/getfetch', (req,res)=>{
    res.send('传统URL传递参数' + req.query + req.query.usr)
})
expr.get('/restfulfetch/:id', (req,res)=>{
    res.send('Restful形式的URL传递参数' + req.params + req.params.id)
})
expr.delete('/deletefetch/:data', (req,res)=>{
    res.send('delete请求传递参数' + req.params + req.params.data)
})
expr.post('/postfetch', (req,res)=>{
    res.send('post请求传递参数') //  + req.body.usr 一加就报错
})
// axios接口
expr.get('/axiosxzy',(req,res)=>{
    res.send('Hi,axios-xzy')
})
expr.get('/axioswithparameter',(req,res)=>{
    res.send(' axios got the parameter => ' + req.query.usr)
})
expr.get('/restfulaxios/:usr',(req,res)=>{
    res.send(' axios got the restful parameter => ' + req.params.usr)
})
expr.get('/paramsaxios',(req,res)=>{
    res.send(' axios obj params => ' + req.query.id)
})
expr.delete('/deleteaxios',(req,res)=>{
    res.send(' axios delete obj params => ' + req.query.id)
})
expr.post('/axios',(req,res)=>{
    // 这里引入 axios 返回结果对象的封装信息
    res.send(' axios post obj params => ' + req.query)
})
expr.put('/axiosjson',(req,res)=>{
    // 这里引入 axios 返回结果对象的封装信息
    res.json({
        usr: "zs",
        age: 23
    })
})
// 配置axios
expr.get('/shortURL',(req,res)=>{
    // 这里引入 axios 返回结果对象的封装信息
    res.json({
        answer: "配置axios.defaults.baseURL后你可以简写路径"
    })
})
expr.get('/interceptor',(req,res)=>{
    res.json({
        answer: "配置interceptors"
    })
})
expr.get('/responseinterceptor',(req,res)=>{
    res.json({
        answer: "responseinterceptors"
    })
})
// 测试async和await
expr.get('/testasync',(req,res)=>{
    res.send("It's async message")
})
// 多个异步请求
expr.get('/multipleasynchronousrequests',(req,res)=>{
    res.send("MXD")
})
expr.get('/multipleasynchronousrequestsduplicate',(req,res)=>{
    if(req.query.info == 'MXD') {
        res.send("MXD+MHXY")
    } else {
        res.send('nonono')
    }
})

// 启动监听
expr.listen(3000, ()=>{
    console.log('running...');
})
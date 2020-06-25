const express= require('express');
const app=express();
const port=3000;

/**
 * 使用JSON中间件
 */
app.use(express.json())


app.listen(3000,()=>{
    console.log('服务已启动')
})

const data=[
    {
        id:1,
        title:'望月-1',
        content:"日出江花红胜火，春来江水绿如蓝-1"
    },
    {
        id:2,
        title:'望月-2',
        content:"日出江花红胜火，春来江水绿如蓝-2"
    },
    {
        id:3,
        title:'望月-3',
        content:"日出江花红胜火，春来江水绿如蓝-3"
    }
];

app.get("/posts",(req,res)=>{
    res.send(data)
});

app.get('/posts/:postId',(req,res)=>{
    const {postId} =req.params;
    const post=data.filter(item=>item.id==postId)
    res.send(post[0])
});

/**
 * 使用post创建新内容
 */
app.post('/posts',(req,res)=>{
    const {content} = req.body;
    //设置状态码
    res.status(201);
    //输出头部数据
    console.log(req.headers['sing-alone']);
    //响应返回数据
    res.send({
        message:`成功创建了内容: ${content}`
    });
})
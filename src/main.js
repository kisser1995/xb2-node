const express= require('express');
const app=express();
const port=3000;

app.listen(3000,()=>{
    console.log('服务已启动')
})

const data=[
    {
        id:1,
        title:'望月-1'
    },
    {
        id:2,
        title:'望月-2'
    },
    {
        id:3,
        title:'望月-3'
    }
];

app.get("/post",(req,res)=>{
    res.send(data)
})

app.get('/post/:postId',(req,res)=>{
    const {postId} =req.params;
    const post=data.filter(item=>item.id==postId)
    res.send(post[0])
})
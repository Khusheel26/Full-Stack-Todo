const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./database');


 
const app = express()

app.use(express.json())

// app.post('/signin',(req,res)=>{

// })

// app.post('/signup',(req,res)=>{

// })


app.post('/todo',async(req,res)=>{
    const todobody = req.body;
    const res = createTodo.safeParse(todobody)

    if(!res.success){
        res.status(411).json({msg:'You have send the wrong input.'})
    }return;

   await todo.create({
    title:todobody.title,
    description:todobody.description,
    completed:false
   })
   res.json({
    msg:"Todo created",
    todoId :_id
   })

})
app.get('/todos',async (req,res)=>{
        const todos = await todo.find({});
        res.json({
            todos
        })
})

app.put('/completed',async (req,res)=>{
    const bodyPayloadId = req.body;
    const finalId = updateTodo.safeParse(bodyPayloadId)
    if(!finalId.success){
        res.status(411).json({msg:"You have sent the wrong todo id"})
    }
    await todo.update({
        _id :bodyPayloadId
    },{
        completed:true
    })
    res.json({
        msg:"Todo marked as completed"
    })
})
app.listen(3000)
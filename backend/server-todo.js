const express=require('express')
const app=express()
const {createtodo,updatetodo}=require('./types')
const {todo}=require('./db')
app.use(express.json())
app.post("/todo",async function (req,res){
    const request=req.body;
    const parsed=createtodo.safeParse(request)
    if(!parsed.success){
        res.status(411).json({
            msg:"sent wrong inputs"
        })
        return
    }
    await todo.create(
        {title:request.title,
            description:request.description,
            completed:false
        }
    )
        res.json({
            msg:"Todo created"
        })



})
app.get("/todos",async function (req,res){
    const todos=await todo.find({})
    res.json(todos)
})
app.put("/complete",async function (req,res){
    const request=req.body;
    const parsed=updatetodo.safeParse(request)
    if(!parsed.success){
        res.status(411).json({
            msg:"sent wrong inputs"
        })
        return
    }
    await todo.updateOne({
        _id:request._id
    },{
        completed:true
    })
    res.json({
        msg:"Todo marked as completed"
    })

    
})
app.listen(3000,()=>{
    console.log("server listening")
})
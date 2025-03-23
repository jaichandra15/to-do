const express=require('express')
const app=express()
const {createtodo,updatetodo}=require('./types')
const {todo}=require('./db.')
app.use(express.json())
app.post("/todo",function (req,res){
    const request=req.body;
    const parsed=createtodo.safeParse(request)
    if(!parsed.success){
        res.status(411).json({
            msg:"sent wrong inputs"
        })
        return
    }
    todo.create(
        {title:request.title,
            description:request.description,
            completed:false
        }
    ).then(()=>{
        res.json({
            msg:"Todo created"
        })
    })



})
app.get("/todos",async function (req,res){
    const todos=await todo.find({})
    console.log(todos)
})
app.put("/complete",async function (req,res){
    const request=req.body;
    const parsed=createtodo.safeParse(request)
    if(!parsed.success){
        res.status(411).json({
            msg:"sent wrong inputs"
        })
        return
    }
    await todo.updaet({
        _id:request.id
    },{
        completed:true
    })
    res.json({
        msg:"Update-done"
    })

    
})
app.listen(3000,()=>{
    console.log("server listening")
})
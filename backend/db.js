const mongoose=require("mongoose")
const { boolean } = require("zod")
mongoose.connect("mongodb+srv://admin:admin1234@cluster0.mkizi.mongodb.net/to-do?retryWrites=true&w=majority&appName=Cluster0")
const todoschema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model('todo',todoschema)
module.exports={
    todo
}
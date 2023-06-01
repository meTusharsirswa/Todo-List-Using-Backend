const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title : String,
})

const Todo = mongoose.model('Todo',TodoSchema)


// const deleteDocument = async (_id)=>{
//     try{
//         const result = await Todo.findByIdAndDelete({_id})
//         console.log(result)
//         }catch(err){
//             console.log(err)
//         }
//     }

module.exports = Todo
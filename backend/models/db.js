const mongoose=require("mongoose");

module.exports = mongoose.connect("mongodb://0.0.0.0:27017/todolist").then(()=>{
    console.log("success");
}).catch(err=>{
    console.log("error");
})
//     useUnifiedTopology:true,
//     useNewUrlParser:true,
//     useFindAndModify:false
// },err=>{
//     if(err) console.log("Error");
//     console.log("success");
// }
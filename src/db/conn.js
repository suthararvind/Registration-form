const mongoose =require("mongoose");
mongoose.connect("mongodb+srv://suthararvindjlr757:h44t6g6r7@cluster0.b6uhyf9.mongodb.net/",{

}).then(()=>{
    console.group(`connection successful`);
}).catch((e)=>{
    console.group(`no connection is established`);
})

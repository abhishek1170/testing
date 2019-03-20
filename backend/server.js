let express =require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let register = require("./router/register");
let login = require("./router/login");
let socket = require("socket.io");

const mongoose = require('mongoose');
const getPost = require("./router/getPost");
const uploadPost = require("./router/userpost");
const singlePost = require("./router/singlePost");
const comment =require("./router/comment");
const getComment = require("./router/getComment");
const reply = require("./router/uploadReply");
const getreply = require("./router/getReply");
const categories = require("./router/categories");
const getcategories = require("./router/getCategories");
const getLike = require("./router/getLike");

mongoose.connect('mongodb://localhost:27017/PPL', {useNewUrlParser: true})
.then((res)=>{
    console.log("mongo is connected")
})
.catch((err)=>{
    console.log("something happen with mongo connections plse check it",err);
})

let app=express();
let server = app.listen(8080,()=>{
    console.log("server is running at 8080 part no.");
})
let io = socket(server);
io.on("connection",socket=>{
    console.log("client is add",socket.id);
    socket.on("recComment",data=>{
        console.log("data from recComment",data)
        socket.broadcast.emit("recComment",data);
    })
    socket.on("recReply",data=>{
        console.log("data from recReply",data)
        socket.broadcast.emit("recReply",data);
    })
    socket.on("recPost",data=>{
        console.log("data from recPost",data)
        socket.broadcast.emit("recPost",data);
    })
})

app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use("/register",register);
app.use("/login",login);
app.use("/uploadPost",uploadPost);
app.use("/getPost",getPost);
app.use("/singlePost",singlePost);
app.use("/comment",comment);
app.use("/getComment",getComment);
app.use("/reply",reply);
app.use("/getreply",getreply);
app.use("/Categories",categories);
app.use("/getCategories",getcategories);
app.use("/like",getLike);




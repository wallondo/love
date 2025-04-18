import express from "express";
import cors from "cors";



const server = express();

server.use(cors());
server.use(express.json());
server.use((req,resp,next)=>{
    
    console.log("next fine");
    next();
})

server.get("/",(req,resp)=>{

    resp.send({status:200,sms:"fine"})
})
var all_declations = [];

server.post("/declaration",(req,resp)=>{

    console.log("sim");
    
    all_declations.unshift({...req.body})

    resp.send({status:201,sms:"Declaração criada com exito",declarations:[...all_declations]})
})

server.get("/declaration_all",(req,resp)=>{

    resp.send({status:200,sms:"all publichion",declarations:[...all_declations]})
})

server.post("/declaracao",(req,resp)=>{
    console.log(req.body);
    
     let dec = all_declations.filter(ele=>{return ele.id==req.body.id})

    console.log(dec);
    console.log("aqui............");
    
    
    resp.send({status:201,sms:"fid",declarations:[...dec]})
})

server.listen(3000,()=>{
    console.log("rodando....")
})



import { useEffect, useRef, useState } from "react";
import Footer from "/src/components/footer/Footer";
import Header from "/src/components/header/header";
import axios from "axios";
import "./create.css";
import { Link, Outlet } from "react-router-dom";

const URL = "http://localhost:3000/";

export default function Creater(){
    const [sms,setSms] = useState("")
    const [lh,setLh] = useState({})
    const [status,setStatus] = useState({})
    const names = useRef("");
    const parcer = useRef("");
    const frase = useRef("");
    const [declaracoes,setDeclaroes] = useState([])

    const atualizar = ()=>{
        axios.get(URL+"declaration_all")
        .then((response)=>{
             setDeclaroes([...response.data.declarations])
        })
    }

    useEffect(()=>{
        atualizar()
    },[])
    const new_post = ()=>{

    }
    const send = () =>{
        
        let name = names.current.value.split(" ")
        let name2 = parcer.current.value.split(" ")
        let history = {
            creater:names.current.value,
            parcer:parcer.current.value,
            frase:frase.current.value,
            data:"02/02/2024",
            img:"/img/love.png",
            id:Math.round(Math.random()*1000000)+name[0]+"Love"+name2[0],
            desc:frase.current.value,
            imgs:["","",""],
            url:""
        }
        axios.post(URL+"declaration",{...history})
        .then((response)=>{
            console.log(response.data.declarations)
            if(response.data.status==201){
                setDeclaroes([...response.data.declarations])
                
                setSms("Declaração criada com exito")
                setTimeout(() => {
                    setSms("")
                }, 1500);
            }else{
                setSms("Probrema na Criação da Declaração")
            }
        })
    }
    const limpa = ()=>{
        names.current.value="";
        parcer.current.value="";
        frase.current.value="";
        
    }
    const criar = (evt)=>{
        evt.preventDefault();

        send()
        limpa()
    }
    const im1 = (evt)=>{
        console.log(evt);
    }

    return(<div className="creater" id="creater">
        <Header/>
            <a href="#criar" className="center a_creater">Criar História</a>
        <nav>
            <ol>
                <li></li>
            </ol>
        </nav>
        <section className='decraracoes' id='decraracoes'>
          <h1>Todas As Declarações Declarações</h1>

          <ol className='special-gothic-regular'>
                {
                    declaracoes.length>=1?declaracoes.map((item,pos)=>(
                        <Link to={"/my-love/"+item.id} key={pos}>
                            <li>
                            <span className='center'>
                                <img src={item.img} alt="" />
                            </span>
                            <h3>{item.creater} && {item.parcer} </h3>
                            <p>{item.desc}</p>
                            <address>{item.data}</address>
                            </li>
                      </Link>
                    )):<div className="load" style={{width:"100px",height:"100px"}}>
                    </div>
                }
             
          </ol>
         
       </section>
       <section className="criar center" id="criar">
                    <h1>Traga as fotos que marcaram o voso amor até aqui</h1>
                    <form action="" method="post" onSubmit={criar}>
                        <input onChange={(evt)=>{}} required ref={names} type="text" name="nome" className="name" placeholder="Seu Nome : " autoComplete="off"/>
                        <input onChange={(evt)=>{}} required ref={parcer} type="text" name="parceira" className="parceira" placeholder="Parceiro(a) : " autoComplete="off" />
                        <input onChange={(evt)=>{}} required ref={frase} type="text" name="frase" className="frase" placeholder="Uma frase Vossa : " autoComplete="off"  />
                        <div className="center">
                            <label htmlFor="img1">Primeira Imagem 1 (obrigatório)</label>
                            <input onChange={im1} type="file" id="img1"  className="off"/>
                            <label htmlFor="img2">Imagem 2 </label>
                            <input type="file" id="img2" className="off"/>
                            <label htmlFor="img3">Imagem 3 </label>
                            <input type="file" id="img3" className="off"/>
                            <label htmlFor="img4">Imagem 4 </label>
                            <input type="file" id="img4" className="off"/>
                        </div>
                            {
                                sms?<h2>{sms}</h2>:""
                            }
                        <button>Cria agora</button>
                    </form>
       </section>
       <Footer/>
    </div>)
}
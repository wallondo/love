import axios from "axios";
import Footer from "../components/footer/Footer";
import Header from "../components/header/header";
import "./May_Love.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const URL = "http://localhost:3000/";

export default function May_Love(){
    const [declaracoes,setDeclaroes] = useState([])
    const [my_love,setMy_love] = useState([])

    const id = useParams()
    
    console.log(id.id)
    useEffect(()=>{
        axios.post(URL+"declaracao",{id:id.id})
        .then((dados)=>{
            setDeclaroes([...dados.data.declarations])
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    useEffect(()=>{
        setMy_love([...declaracoes])
        console.log(declaracoes);
    },[declaracoes])
    


    return(
        <div className="May_Love">
            <Header/>
                <section className="my-love">
                    {
                        my_love.length>0? <div>
                        <h1>{my_love[0].creater} <img src={my_love[0].img} alt="" /> {my_love[0].parcer}</h1>
                            <h2>{my_love[0].frase}</h2>
                           <span>
                           <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                           </span>
                           <address>
                           {my_love[0].data} 
                           </address>
                        </div>:<div className="load" style={{width:"100px",height:"100px"}}>
                        </div>
                    }
                   
                </section>
            <Footer/>
        </div>
    )
}
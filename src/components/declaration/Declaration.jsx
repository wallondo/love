import React from "react";
import { useEffect, useState } from "react";
import "./declaration.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const URLs = "http://localhost:3000/";

export default function Declaration(){
    const params = useParams()
    const [declaracao,setDeclaracao] = useState([]);

    
    useEffect(()=>{
        axios.post(URLs+"declaracao",{id:params.id})
        .then((response)=>{
            console.log(response.data);
            
            setDeclaracao([...response.data.declarations])
        })
    },[])

    return(
        <div className="declaracao">
                <h2>Declaração de <br /></h2>
                <ol>
                        {
                            declaracao.map((item,pos)=>(
                                <li key={pos}>
                                <span className='center'>
                                    <img src={item.img} alt="" />
                                </span>
                                <h3>{item.creater} && {item.parcer} </h3>
                                <p>{item.desc}</p>
                                <address>{item.data}</address>
                                </li>
                            ))
                        }
                </ol>


        </div>
    )
}
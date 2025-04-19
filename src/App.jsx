import React from "react";
import { useEffect, useState ,useRef} from 'react'
import './App.css'
import axios from "axios";
import { Link } from 'react-router-dom';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import URL from "./Url";

// const URL = "http://localhost:3000/";
// const URL = "https://loveserver-psi.vercel.app/"

function App() {
  const [count, setCount] = useState(0)
  const [declaracoes,setDeclaroes] = useState([])
  const [declaracoes2,setDeclaroes2] = useState([])


  useEffect(()=>{
    axios.get(URL+"declaration_all")
    .then((dados)=>{
      console.log(dados);
      
      setDeclaroes([...dados.data.declarations])
    })
    .catch((err)=>{
      console.log(err);
    })

  },[])
  useEffect(()=>{
    if(declaracoes.length>=5){
      let h = declaracoes.slice(0,6)
      setDeclaroes2([...h])
    }
  },[declaracoes])
  const email = useRef(null)
  const email_send = () =>{
    if(email.current.value==""){
      alert("Insira um indereço de email")
    }else{
      axios.post(URL+"email",{email:email.current.value})
      .then((data)=>{
        alert("Recebido com exito")
        email.current.value="";
      })
      .catch((erros)=>{
        console.log("erosssss");
      })
    }
  }
const nom = useRef(null)
const num = useRef(null)
const text = useRef(null)

  const fale_conosco_ = ()=>{
    if (nom.current.value==""||num.current.value==""||text.current.value=="") {
        alert("Preencha todos os Campos")
    } else {
      axios.post(URL+"fale-conosco",{nom:nom.current.value,num:num.current.value,text:text.current.value})
      .then((dados)=>{
        alert("Recebido com exito");
      })
      .catch((err)=>{
        console.log("errossssssss");
        
      })
    }
  }
const sub = (evt)=>{
  evt.preventDefault()
}
useEffect(()=>{
  let funciona_scroll = document.querySelector(".funciona_scroll");
  window.addEventListener("scroll",(evt)=>{
    console.log(window.pageYOffset);//647
    if(window.pageYOffset>=200){
      // funciona_scroll
      funciona_scroll.classList.remove("top");
    }else{
      funciona_scroll.classList.add("top");
    }
  let decraracoes_scroll = document.querySelector(".decraracoes_scroll");
    if(window.pageYOffset>=800){
      // decraracoes_scroll
      decraracoes_scroll.classList.remove("top");
    }else{
      decraracoes_scroll.classList.add("top");
    }

    let dizem_scroll = document.querySelector(".dizem_scroll");
    if(window.pageYOffset>=1400){
      // decraracoes_scroll
      dizem_scroll.classList.remove("top");
    }else{
      dizem_scroll.classList.add("top");
    }
    let prices_scroll = document.querySelector(".prices_scroll");
    if(window.pageYOffset>=2200){
      // decraracoes_scroll
      prices_scroll.classList.remove("top");
    }else{
      prices_scroll.classList.add("top");
    }

    let perguntas_scroll = document.querySelector(".perguntas_scroll");
    if(window.pageYOffset>=2600){
      // decraracoes_scroll
      perguntas_scroll.classList.remove("top");
    }else{
      perguntas_scroll.classList.add("top");
    }
    let fale_conosco_scroll = document.querySelector(".fale_conosco_scroll");
    if(window.pageYOffset>=3000){
      // decraracoes_scroll
      fale_conosco_scroll.classList.remove("top");
    }else{
      fale_conosco_scroll.classList.add("top");
    }
    return false;
  })
},[])

  return (
    <div className='App' id='l-h'>
       <Header/>

       <div className='slid'>
            <h1>Eternize o seu amor de forma sem igual!!!</h1>
            <h2>Faça com que o seu parceiro e o mundo saiba que é praa sempre</h2>
            <a href="/crate_lh" className='center special-gothic-regular'>Criar Agora-100% Grátis</a>
       </div>
       <span className="body_span">
          <section className='funciona funciona_scroll top' id='funciona'>
                  <div className='borda'></div>
                  <h1>Como Funciona</h1>
                  <ol className='special-gothic-regular'>
                      <li>
                        <h2>Criar sua declaração</h2>
                          <p>
                              Preencha os detalhes do seu relacionamento e escreva uma mensagem especial.
                          </p>
                        </li>
                      <li>
                        <h2>Adicionar Fotos</h2>
                          <p>
                          Selecione até 4 fotos especiais que representem seu amor
                          </p>
                      </li>
                      <li>
                        <h2>Compartilhe</h2>
                        <p>Envie o link para seu amor e surpreenda-o com essa declaração única.</p>  
                      </li>
                  </ol>
          </section>
          <section className='decraracoes decraracoes_scroll top' id='decraracoes'>
              <h1>Declarações Recentes</h1>
              <ol className='special-gothic-regular'>
                    {
                        declaracoes2.length>=1?declaracoes2.map((item,pos)=>(
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
              <a href="/crate_lh">ver todos</a>
          </section>
          <section className='dizem dizem_scroll top' id='dizem'>
                <h1>O Que dizem sobre nós</h1>
                <ol className='special-gothic-regular'>
                  <li>
                      <span>
                        <img src="" alt="" />
                        <h2>Mariana & Carlos</h2>
                      </span>
                      <p>“A melhor forma de eternizar nossos momentos.”</p>
                  </li>
                </ol>
          </section>
          <section className='prices prices_scroll top ' id='prices'>
                <h1>Escolha seu Plano</h1>
                <ol className='special-gothic-regular'>
                  <li>
                    <h2>Básico</h2>
                    <h1>Grátis</h1>
                    <ol>
                      <li>1 Declaração</li>
                      <li>Fotos limitadas</li>
                      <li>Sem suporte premium</li>
                    </ol>
                    <a href="#">Escolher</a>
                  </li>
                  <li>
                    <h2>Premium</h2>
                    <h1>5.000.00kz</h1>
                    <ol>
                      <li>Declarações ilimitadas</li>
                      <li>Upload até 10 fotos</li>
                      <li>Suporte por e-mail</li>
                    </ol>
                    <a href="#">Escolher</a>
                  </li>
                  <li>
                    <h2>Ultimate</h2>
                    <h1>10.000.00kz</h1>
                    <ol>
                      <li>Tudo do Premium</li>
                      <li>Templates exclusivos</li>
                      <li>Suporte 24/7</li>
                    </ol>
                    <a href="#">Escolher</a>
                  </li>
                </ol>
          </section>
          <section className='perguntas perguntas_scroll top ' id='perguntas'>
                <h1>Perguntas Frequentes</h1>
                  <details className='special-gothic-regular'>
                      <summary>
                        Quanto tempo online?
                      </summary>
                      <p>
                          O tempo de uma recordação é definida pelo plano adqirido
                      </p>
                  </details>
                  <details className='special-gothic-regular'>
                      <summary>
                        Como posso postar minha declaração?
                      </summary>
                      <p>
                          Simple, a seção como "funciona" vai responde e indicar como faze-lo!
                      </p>
                  </details>
                  <details className='special-gothic-regular'>
                      <summary>
                        De onde poso acessar?
                      </summary>
                      <p>
                        O sistema estará sempre online e acessivel para qualque aparelho.
                      </p>
                  </details>
                  <details className='special-gothic-regular'>
                      <summary>
                        Posso deletar minhas Histórias?
                      </summary>
                      <p>
                          No momento , só o Gestro do sitema pode deletar ou Editar após criada.
                      </p>
                  </details>
                  <details className='special-gothic-regular'>
                      <summary>
                        Como contactar o Gestor?
                      </summary>
                      <p>
                        Podes contactar o gestor "Quinguri" pelo whats : 925786916
                      </p>
                  </details>
                  <details className='special-gothic-regular'>
                      <summary>
                        Posso ter meu próprio sistema?
                      </summary>
                      <p>
                        Sim, podes. Apenas entrar em contacto com o Gestor e solicitar um projeo semelhante.
                      </p>
                  </details>
                  <details className='special-gothic-regular'>
                      <summary>
                        Quanto custa meu próprio sistema?
                      </summary>
                      <p>
                          O preçario de cada sistema será abordado com o Gestor, mas sempre bem acessivel.
                      </p>
                  </details>
                  <div className='subscrive'>
                        <h1>Assine nossa Newsletter</h1>
                        <h3>Receba dicas de amor, atualizações e novidades direto no seu e mail. <br /> 
                            recebera em menos de 5min a mais nova atualização
                        </h3>
                        <div>
                            <input ref={email} type="email" placeholder='Email : ' />
                            <button onClick={email_send}>Enviar</button>
                        </div>
                  </div>
          </section>
          <section className='fale_conosco fale_conosco_scroll top' id='fale_conosco'>
                <h1>Fale Conosco</h1>
                <section>
                      <form action="#" onSubmit={sub}>
                        <input ref={nom} type="text" name='nome' placeholder='Nome : ' required autoComplete='off'/>
                        <input ref={num} type="number" name='number' placeholder='Número : ' required />
                        <textarea ref={text} name="texto" id="texto"></textarea>
                        <button onClick={fale_conosco_}>Enviar</button>
                      </form>
                      <div>

                      </div>
                </section>
          </section>
       </span>
       <Footer/>
    </div>
  )
}

export default App

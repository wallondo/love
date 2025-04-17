import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/Footer'
import axios from "axios";
import { Link } from 'react-router-dom';

const URL = "http://localhost:3000/";

function App() {
  const [count, setCount] = useState(0)
  const [declaracoes,setDeclaroes] = useState([])
  const [declaracoes2,setDeclaroes2] = useState([])


  useEffect(()=>{
    axios.get(URL+"declaration_all")
    .then((dados)=>{
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

  return (
    <div className='App' id='l-h'>
       <Header/>
       <div className='slid'>
            <h1>Eternize o seu amor de forma sem igual!!!</h1>
            <h2>Faça com que o seu parceiro e o mundo saiba que é praa sempre</h2>
            <a href="/crate_lh" className='center special-gothic-regular'>Criar Agora-100% Grátis</a>
       </div>
       <section className='funciona' id='funciona'>
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
       <section className='decraracoes' id='decraracoes'>
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
       <section className='dizem' id='dizem'>
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
       <section className='prices' id='prices'>
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
       <section className='perguntas' id='perguntas'>
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
                    Quanto tempo online?
                  </summary>
                  <p>
                      O tempo de uma recordação é definida pelo plano adqirido
                  </p>
              </details>
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
                    Quanto tempo online?
                  </summary>
                  <p>
                      O tempo de uma recordação é definida pelo plano adqirido
                  </p>
              </details>
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
                    Quanto tempo online?
                  </summary>
                  <p>
                      O tempo de uma recordação é definida pelo plano adqirido
                  </p>
              </details>
              <details className='special-gothic-regular'>
                  <summary>
                    Quanto tempo online?
                  </summary>
                  <p>
                      O tempo de uma recordação é definida pelo plano adqirido
                  </p>
              </details>
              <div className='subscrive'>
                    <h1>Assine nossa Newsletter</h1>
                    <h3>Receba dicas de amor, atualizações e novidades direto no seu e mail. <br /> 
                        recebera em menos de 5min a mais nova atualização
                    </h3>
                    <div>
                        <input type="email" placeholder='Email : ' />
                        <button>Enviar</button>
                    </div>
              </div>
       </section>
       <section className='fale_conosco' id='fale_conosco'>
            <h1>Fale Conosco</h1>
            <section>
                  <form action="#">
                    <input type="text" name='nome' placeholder='Nome : ' required autoComplete='off'/>
                    <input type="number" name='number' placeholder='Número : ' required />
                    <textarea name="texto" id="texto"></textarea>
                    <button>Enviar</button>
                  </form>
                  <div>

                  </div>
            </section>
       </section>
       <Footer/>
    </div>
  )
}

export default App

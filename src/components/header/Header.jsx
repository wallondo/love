import "./header.css";


export default function Header(){
    return(
        <header className="header_componet ">
            <div className="log center">
                <a href="/#l-h"><h1>L-H</h1></a>
            </div>
            <nav className="special-gothic-regular center">
                <ol>
                    <li> <a href="/#funciona">Funcionamento</a> </li>
                    <li> <a href="/#dizem">Depoimentos</a> </li>
                    <li> <a href="/#prices">Planos</a> </li>
                    <li> <a href="/#perguntas">Perguntas</a></li>
                    <li> <a href="/#fale_conosco">Contatos</a></li>
                    <li> <a href="/#decraracoes">Declaração</a></li>
                    
                </ol>
            </nav>
            <div className="bt_declaracao center">
                <a href="/crate_lh" className="center special-gothic-regular">Criar Hitória</a>
            </div>
        </header>
    )
}

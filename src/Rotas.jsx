import { Routes, BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Creater from "./pajes/Create";
import Declaration from "./components/declaration/Declaration";
import Not_Love from "./pajes/Not_Love";
import May_Love from "./pajes/May_Love";



export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="crate_lh" element={<Creater/>}></Route>
                <Route path="my-love/:id" element={<May_Love/>}/>
                <Route path="*" element={<Not_Love/>}/>
            </Routes>
        </BrowserRouter>
    )
}


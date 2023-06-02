import Footer from "../footer/Footer";
import {NavLogado} from "./NavLogado";
import "../deslogado/header/logado.css";
import {Camera} from "./camera/Camera";

export function Logado(){
    return(
        <div id='paginalogado'>
            <NavLogado />
            <Camera />
        </div>
    )
}
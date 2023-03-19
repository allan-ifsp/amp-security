
import { Carousel } from "./carousel/Carousel";
import { Jumbotron } from "./jumbotron/Jumbotron";
import { Quadrado } from "./Quadrado/Quadrado";
import { Formcontato } from "./formcontato/Formcontato";


export function Home(){
    return(
        <div>
            <Carousel />
            <Quadrado />
            <Jumbotron />
            <Formcontato />
        </div> 
    )
    //AGORA COM JUMBOTRON
}
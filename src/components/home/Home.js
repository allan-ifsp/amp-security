
import { Carousel } from "./carousel/Carousel";
import { Jumbotron } from "./jumbotron/Jumbotron";
import { Quadrado } from "./Quadrado/Quadrado";
import { Formcontato } from "./formcontato/Formcontato";


export function Home(){
    return(
        <div>
            <Carousel />
            <Quadrado />
            {/*editae qualquer coisa*/}
            <Formcontato />
        </div> 
    )
    //AGORA sem JUMBOTRON
}
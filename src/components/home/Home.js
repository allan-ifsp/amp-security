
import { Carousel } from "./carousel/Carousel";
import { Jumbotron } from "./jumbotron/Jumbotron";
import { Quadrado } from "./Quadrado/Quadrado";
import { Formcontato } from "./formcontato/Formcontato";


export function Home(){
    return(
        <div> 
            <Carousel />
            <Jumbotron />
            
            <Formcontato />
        </div> 
    )
    //COMENTARIO PRA VER O MERGE 22222222
}
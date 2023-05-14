
// import { Carousel } from "./carousel/Carousel";
import { Jumbotron } from "./jumbotron/Jumbotron";
import { Quadrado } from "./Quadrado/Quadrado";
import {Formcontato} from "./formcontato/Formcontato";
import {Celta} from "./carousel/Carousel";


export function Home(){
    return(
        <div>
            <Celta />
            <Jumbotron />
            <br />
            <Quadrado />
            <Formcontato />
        </div>
    )
}

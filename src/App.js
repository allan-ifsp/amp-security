import { NavScroll } from './components/header/NavScroll';
import './App.css';

// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/footer/Footer';
import { Home } from './components/home/Home';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {Logado} from "./components/logado/Logado";


function App() {
  return(
    <div>
        <NavScroll />
        {/*<Home />*/}
        <Footer />
        {/*<Logado />*/}
    </div>
  );
}

export default App;

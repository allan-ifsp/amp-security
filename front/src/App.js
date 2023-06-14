import { NavScroll } from './components/deslogado/header/NavScroll';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/footer/Footer';
import { Home } from './components/deslogado/home/Home';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, {useState} from "react";
import {MainDeslogado} from "./components/deslogado/MainDeslogado";
import {NavLogado} from "./components/logado/NavLogado";


function App() {
    const [showContent, setShowContent] = useState(<MainDeslogado />);

    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/paginalogado" element={<NavLogado />}></Route>
                    <Route path="/" element={<MainDeslogado />}></Route>
                </Routes>
            </Router>
            <Footer />
        </div>
  );
}

export default App;

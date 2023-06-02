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
import {Logado} from "./components/logado/Logado";
import React, {useState} from "react";
import {MainDeslogado} from "./components/deslogado/MainDeslogado";


function App() {
    const [showContent, setShowContent] = useState(<MainDeslogado />);

    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/paginalogado" element={<Logado />}></Route>
                </Routes>
            </Router>
            {showContent}
            <Footer />
        </div>
  );
}

export default App;

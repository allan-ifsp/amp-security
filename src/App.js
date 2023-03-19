import { NavScroll } from './components/header/NavScroll';
import './App.css';

// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/footer/Footer';
import { Home } from './components/home/Home';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";



function App() {
  return (
    <div>
        {/* <Header /> */}
        <Footer />
        <Home />
        <Footer />
      </div>
  );
}

export default App;

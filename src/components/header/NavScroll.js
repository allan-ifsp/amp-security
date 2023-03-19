import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navscroll.css';

export function NavScroll() {
  return (
      // bg="dark" variant="dark"
      // <Navbar className="bg-success p-2" style={{ "--mdb-bg-opacity": "0.5" }} variant="dark" expand="xl" >
      <Navbar className='meunavbar' expand="xl" >
      <Container fluid >
        <div>
            <Navbar.Brand href="#"><img src="/imagens/logocompotencial.png" alt="Alan Turing" height='100px' /></Navbar.Brand>
        </div>
        <div>
            <Navbar.Toggle className="bg-light p-2" style={{ "--mdb-bg-opacity": "0.5" }} aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                {/*<Nav.Link href="/">Home</Nav.Link>*/}
                <Nav.Link href="#actionemp">Empresa</Nav.Link>
                <NavDropdown title="Serviços" id="DropdownServicos">
                    <NavDropdown.Item href="#action1">serviço 1</NavDropdown.Item>
                    <NavDropdown.Item href="#action2">serviço 2</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">serviço 3</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">Contato</Nav.Link>
                <div className="nav-item">
                    <a className="nav-link disabled"></a>
                </div>
                <Nav.Link href="#a" className='fw-bolder justify-content-center'>ACESSO</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </div>

      </Container>
    </Navbar>
  );
}
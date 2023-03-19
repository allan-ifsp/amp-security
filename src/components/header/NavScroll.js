import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function NavScroll() {
  return (
    <Navbar className='my-custom-navbar' bg="dark" variant="dark" expand="xl" >
      <Container fluid >
        <div>
            <Navbar.Brand href="#"><img src="alan.jpeg" alt="Alan Turing" height='100px' /></Navbar.Brand>
        </div>
        <div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#actionemp">Empresa</Nav.Link>
                <NavDropdown title="Serviços" id="DropdownServicos">
                    <NavDropdown.Item href="#action1">serviço 1</NavDropdown.Item>
                    <NavDropdown.Item href="#action2">serviço 2</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">serviço 3</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Suporte" id="DropdownSuporte">
                    <NavDropdown.Item href="#action3">Cliente</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Funcionarios</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Alguma outra coisa aqui
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">Contato</Nav.Link>
            </Nav>
            <div class="nav-item">
                <a class="nav-link disabled"></a>
            </div>
            <div class="nav-item">
                <a class="nav-link disabled"></a>
            </div>
            <Form className="d-flex minha-busca">
                <Form.Control
                type="search"
                placeholder="Pesquisa"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Pesquisa</Button>
            </Form>
            </Navbar.Collapse>
        </div>
        
      </Container>
    </Navbar>
  );
}
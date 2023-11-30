import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import './style.css';

const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{ fontSize: '18px', letterSpacing: '2px' }}>
          <Nav.Link as={Link} to="/city">Cidades</Nav.Link>
          <Nav.Link as={Link} to="/client">Clientes</Nav.Link>
          <Nav.Link as={Link} to="/department">Departamentos</Nav.Link>
          <Nav.Link as={Link} to="/employee">Funcionários</Nav.Link>
          <Nav.Link as={Link} to="/bus">Ônibus</Nav.Link>
          <Nav.Link as={Link} to="/partner">Parceiros</Nav.Link>
          <Nav.Link as={Link} to="/ticket">Passagens</Nav.Link>
          <Nav.Link as={Link} to="/listar">Listar Dados Gerais</Nav.Link>
          <Nav.Link as={Link} to="/fdv">Funcionário por Departamento</Nav.Link>
          <Nav.Link as={Link} to="/pcv">Passagem por Cliente</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;

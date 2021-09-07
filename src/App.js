import './App.css';
import React from 'react';
import Resume from './components/resume/Resume';
import { Route, BrowserRouter as Router, Link, Switch, NavLink } from 'react-router-dom';
import Main from './components/main/Main';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

class App extends React.Component {
  render() {
    return (
    <Router>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>markdw.dev</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav"/>
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <LinkContainer exact to="/" >
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/resume">
                <Nav.Link>Resume</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Router path="/resume">
          <Resume/>
        </Router>
      </Switch>
    </Router>
    );
  }
}

export default App;

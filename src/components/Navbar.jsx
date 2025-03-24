import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../assets/logo.png'

function NavbarComponent() {
  const [currentTime, setCurrentTime] = useState('')
  setInterval(() => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }

    let now = new Date().toLocaleDateString("en-US", options).replace('at', '|')
    setCurrentTime(now)
  }, 1000)


  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">
          <img
            alt="logo"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          DailyNews
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className='align-items-center'>
            <Nav.Link 
              href="#"
              disabled={true}
              style={{
                border: '1px solid #ddd',
                borderRadius: '0.375rem'
              }}
            >
              {currentTime}
            </Nav.Link>
            <Nav.Link href="#">
              <Button>
                Subscribe to DN+
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
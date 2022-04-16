import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import './Header.css'


const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="sm" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/" className='eBajar'>E-Bajar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/cart"><FaShoppingCart size={30} fill='#b0d83e' /></Nav.Link>
                            <p style={{ width: '30px' }}></p>
                            <Nav.Link href="/login"><FaUser size={30} fill='#5ab3dc' /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    )
}

export default Header
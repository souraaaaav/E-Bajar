import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { LinkContainer } from 'react-router-bootstrap'
import './Header.css'


const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="sm" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand href="/" className='eBajar'>E-Bajar</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <LinkContainer to="/cart">
                                <Nav.Link href="/cart"><FaShoppingCart size={30} fill='#b0d83e' /></Nav.Link>
                            </LinkContainer>
                            <p style={{ width: '30px' }}></p>
                            <LinkContainer to="/login">
                                <Nav.Link href="/login"><FaUser size={30} fill='#5ab3dc' /></Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    )
}

export default Header
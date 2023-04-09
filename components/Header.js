import React from 'react';

import Link from 'next/link';

import { Container, Nav, Navbar } from 'react-bootstrap';

export default function Header() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Next App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/" className='nav-link'>
              Home
            </Link>
            <Link href="/about" className='nav-link'>
              About
            </Link>
            <Link href="/comments" className='nav-link'>
              Comments
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

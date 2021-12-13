import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import './Header.css';
import React, { useEffect, useState } from "react";
export const Header = () => {
  const [showLogout, setShowLogout] = useState(false)
  const navigate = useNavigate()
useEffect( () => {
  const id = localStorage.getItem('id')
if(id) {
  setShowLogout(true);
}
})
    return(
        <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">AWAVE</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="users">Users</Nav.Link>
      <Nav.Link href="login">Login</Nav.Link>
      <Nav.Link href="sign-up">Sign-up</Nav.Link>
      <Nav.Link href="profile">Profile</Nav.Link>



    </Nav>
     { showLogout && <button onClick={() => {
       localStorage.clear()
       setShowLogout(false)
       navigate('/login')

     }
     }>Logout</button>}
    </Container>
  </Navbar>
 
</>
    )
}
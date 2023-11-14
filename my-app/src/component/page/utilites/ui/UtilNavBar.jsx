/*eslint-disable*/
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from 'styled-components';
import NavBarIcon from './NavBarIcon';


function UtilNavBar(props) {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">서비스 소개</Nav.Link>
            {/* <Nav.Link href="#pricing">정보 입력</Nav.Link> */}
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Long</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Shorts
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Community</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <NavBarIcon src="../../../../images/userInfo.png"
                    onClick={()=>{}}
              />
              {/* <a href="https://www.flaticon.com/kr/free-icons/" title="사람 아이콘">사람 아이콘  제작자: Febrian Hidayat - Flaticon</a> */}
            </Nav.Link>
            <Nav.Link>
              <NavBarIcon src="../../../../images/logout.png" alt="logout"
                   onClick={()=> {}}
              />
              
              {/* <a href="https://www.flaticon.com/kr/free-icons/" title="떠나다 아이콘">떠나다 아이콘  제작자: Creatype - Flaticon</a> */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default UtilNavBar;
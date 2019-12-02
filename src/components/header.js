import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from './image'
import {Navbar,Nav,Container, Breadcrumb} from 'react-bootstrap'
import './header.css'
// import { MdMail } from "react-icons/md"

const Header = ({ siteTitle }) => (
  <div>
<Container>
  <Navbar bg="dark" expand="lg" fixed="top">
  <Navbar.Brand href="#home" className="text-white">LOGO</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto mr-4">
    <Link to=""> <Nav.Link href="#home" className="text-white" >ADVISORY</Nav.Link> </Link>
    <Link to="/"> <Nav.Link  href="#link" className="text-white" >CONSULTING</Nav.Link> </Link>
    <Link to="/blog/">
            <Nav.Link href="#link">AIQRATIONS</Nav.Link>
          </Link>
      <Link to="/Approach"> <Nav.Link  href="#link" className="text-white" >OUR APPROACH</Nav.Link> </Link>
      <Link to="/contactUs"> <Nav.Link  href="#link" className="text-white" >ContactUs</Nav.Link> </Link>
      {/* <NavDropdown title="ABOUT US" id="basic-nav-dropdown" style={{color:'white'}}>
      <Link to="/Approach"><NavDropdown.Item ></NavDropdown.Item>Our Approach</Link>
        <Link to="/"><NavDropdown.Item href="#action/3.1">AIQRATE Team</NavDropdown.Item></Link>
        <Link to="/"><NavDropdown.Item href="#action/3.2">Why We Exist</NavDropdown.Item></Link>
        <Link to="/"><NavDropdown.Item href="#action/3.3">In The News</NavDropdown.Item></Link>
        <Link to="/"><NavDropdown.Item href="#action/3.4">Contact Us</NavDropdown.Item></Link>
      </NavDropdown> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>
</Container>

<Container style={{marginTop:"50px",marginBottom:"-18px"}}>
    <Breadcrumb>
    <strong  className="mt-1" style={{fontSize:'15px'}}>AI Strategy:&nbsp;</strong><Breadcrumb.Item active href="#"  className="mt-1">Transformation |</Breadcrumb.Item>
  <Breadcrumb.Item active  className="mt-1" href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">Innovation |
  </Breadcrumb.Item>
  <Breadcrumb.Item active className="mt-1">Disruption</Breadcrumb.Item>
</Breadcrumb>
    </Container>
    <Image />
    </div>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

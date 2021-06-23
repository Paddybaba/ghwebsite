// import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import styles from '../styles/Components.module.css'

function NavigationBar(){

   return(
<Navbar className={styles.navBar} >
  <Navbar.Brand style={{color:"white"}} href="#home">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" >
    <Nav className="mr-auto">
      <Nav.Link style={{color:"white"}} href="#home">About us</Nav.Link>
      
      <NavDropdown  title={<span style={{color: "white"}}>Departments</span>} id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">General Surgery</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Medicine</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Obstetrics and Gynaecology</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Fertility and Test tube baby Center</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Orthopaedics and Trauma</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Paediatrics</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Pathology</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Radiology</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Anaesthesia</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title={<span style={{color: "white"}}>News and TPAs</span>} id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link style={{color:"white"}} href="#link">Gallery</Nav.Link>
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
  </Navbar.Collapse>
</Navbar>
    )}

    export default NavigationBar;
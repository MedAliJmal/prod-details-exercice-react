import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { GiShoppingCart } from "react-icons/gi";

const Entete = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              style={{ height: "30px", width: "auto" }}
              src="https://gomycode.com/tn/wp-content/uploads/sites/26/2023/07/Artboard-26-2.png"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Products</Nav.Link>
              <NavDropdown title="Category" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Phones</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Consoles</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Laptops & Computers
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                <GiShoppingCart style={{ color: "black", fontSize: "30px" }} />
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Entete;

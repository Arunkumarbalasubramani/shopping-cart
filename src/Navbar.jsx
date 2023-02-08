import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import DeleteIcon from "@mui/icons-material/Delete";

import { Table } from "react-bootstrap";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Navbarcomponent = ({ existingCart }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {" "}
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Start Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <NavDropdown title="Shop" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action4">
                  All Products
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Popular Items
                </NavDropdown.Item>
                <NavDropdown.Item href="#action3">
                  New Arrivals
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button variant="light" onClick={handleShow}>
              <IconButton aria-label="cart">
                <StyledBadge
                  badgeContent={existingCart.length}
                  color="secondary"
                >
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>{" "}
              Cart{" "}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {existingCart.map(({ name, price }, index) => (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{price}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Offcanvas.Body>
        <Button variant="outlined">
          <IconButton aria-label="cart">
            <PaymentsIcon />
          </IconButton>{" "}
          Proceed to CheckOut{" "}
        </Button>
      </Offcanvas>
    </>
  );
};

export default Navbarcomponent;

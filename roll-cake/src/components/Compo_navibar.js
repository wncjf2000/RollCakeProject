import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import SearchBar from "./Nav_SearchBar";
import { Link } from "react-router-dom";
import logo from "../logo.png";

const Navigation = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");

  return (
    <>
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="sm"
        bg="#e74333"
        variant="dark"
      >
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <img
                src={logo}
                height="32"
                alt="logo"
                className="d-inline-block align-text-top"
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-navbar-nav">
            <Nav className="me-auto">
              <Link
                className="nav-link"
                activeClassName="active"
                aria-current="page"
                to="/hotdeal"
                style={{ color: "white" }}
              >
                핫딜
              </Link>
            </Nav>
            <Nav>
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;

// // 출처
// // https://medium.com/swlh/responsive-navbar-using-react-bootstrap-5e0e0bd33bd6
// // https://react-bootstrap.github.io/components/navbar/#navbars-mobile-friendly

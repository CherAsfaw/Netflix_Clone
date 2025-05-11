import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Netflix from "../../assets/image/Netflix_Logo.png";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <img className="header-logo ms-5" src={Netflix} alt="Netflix Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Left navigation */}
          <Nav className="me-auto header-list">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#tvshows">TV Shows</Nav.Link>
            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="#latest">Latest</Nav.Link>
            <Nav.Link href="#mylist">My List</Nav.Link>
            <Nav.Link href="#language">Browse by Language</Nav.Link>
          </Nav>

          {/* Right navigation/icons */}
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#">
              <SearchIcon />
            </Nav.Link>
            <Nav.Link href="#">
              <NotificationsNoneIcon />
            </Nav.Link>
            <Nav.Link className="me-0 pe-0" href="#">
              <AccountBoxIcon />
            </Nav.Link>
            <Nav.Link className="ms-0 ps-0" href="#">
              <ArrowDropDownIcon />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

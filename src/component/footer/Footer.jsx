import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Row"
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import './footer.css'


function Footer() {

  return (
    <>
      <Container>
        <Row className="justify-content-end my-3">
          <Col className="col-3">
            <div className="d-flex justify-content-center mb-2">
              <div className="icon">
                <FacebookOutlinedIcon />
              </div>
              <div className="mx-4 icon">
                <InstagramIcon />
              </div>
              <div className="icon">
                <YouTubeIcon />
              </div>
            </div>
            <div className="list-wrapper d-flex justify-content-start">
              <ul>
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notice</li>
              </ul>
            </div>
          </Col>

          <Col className="col-3">
            <div className="list-wrapper">
              <ul>
                <li>Help Center</li>
                <li>Investor Relations</li>
                <li>Cookie Preferences</li>
              </ul>
            </div>
          </Col>
          <Col className="col-3">
            <div className="list-wrapper">
              <ul>
                <li>Gift Cards</li>
                <li>Terms of Use</li>
                <li>Corporate Information</li>
              </ul>
            </div>
          </Col>
          <Col className="col-3">
            <div className="list-wrapper">
              <ul>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Center</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="div-container">
        <p className="ms-5 px-2">Service Code</p>
        <div className="ms-5">&copy; 1997-2025 Netflix, Inc</div>
      </div>
    </>
  );
}

export default Footer
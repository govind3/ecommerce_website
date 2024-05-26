import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#333", margin: "0.5rem" }}
      className="font-small pt-3 mt-7"
    >
      <Container
        fluid
        className="text-center text-md-left"
        style={{ color: "white" }}
      >
        <Row style={{ color: "white" }}>
          <Col md="6">
            <h4 className="title" style={{ color: "orange" }}>
              <b>About</b>
            </h4>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </Col>
          <Col md="6">
            <h4
              className="title"
              style={{ color: "orange", marginLeft: "35px" }}
            >
              <b>Links</b>
            </h4>
            <ul style={{ color: "white" }}>
              <li className="list-unstyled">
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginLeft: "8px",
                  }}
                  variant="info"
                  size="sm"
                >
                  <i className="fas fa-home"></i> Home
                </Link>
              </li>
              <li className="list-unstyled">
                <Link
                  to="/help"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginTop: "0.5rem",
                    marginLeft: "6px",
                    height: "25%",
                    width: "12%",
                  }}
                  variant="info"
                  size="sm"
                >
                  <i className="fas fa-address-card"></i> Help
                </Link>
              </li>
              <li className="list-unstyled ">
                <Link
                  to="/about"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginTop: "0.5rem",
                    marginLeft: "4px",
                    height: "25%",
                    width: "12%",
                  }}
                  variant="info"
                  size="sm"
                >
                  <i className="fas fa-info "></i> About
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright text-center py-3">
        <Container fluid style={{ color: "white" }}>
          Copyright &copy; {new Date().getFullYear()}, Govind
        </Container>
      </div>
    </footer>
  );
}

export default Footer;

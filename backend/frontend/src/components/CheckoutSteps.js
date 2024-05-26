import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function CheckoutSteps({ step1, step2, step3, step4 }) {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <LinkContainer
            to="/login"
            style={{
              border: "2px solid gray",
              backgroundColor: "gray",
              borderRadius: "7px",
            }}
          >
            <Nav.Link>
              <span
                style={{ color: "white", fontWeight: "900", fontSize: "15px" }}
              >
                Login
              </span>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Login</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer
            to="/shipping"
            style={{
              border: "2px solid gray",
              backgroundColor: "gray",
              borderRadius: "7px",
            }}
          >
            <Nav.Link>
              <span
                style={{ color: "white", fontWeight: "900", fontSize: "15px" }}
              >
                Shipping
              </span>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Shipping</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer
            to="/payment"
            style={{
              border: "2px solid gray",
              backgroundColor: "gray",
              borderRadius: "7px",
            }}
          >
            <Nav.Link>
              <span
                style={{ color: "white", fontWeight: "900", fontSize: "15px" }}
              >
                Payment
              </span>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer
            to="/placeorder"
            style={{
              border: "2px solid gray",
              backgroundColor: "gray",
              borderRadius: "7px",
            }}
          >
            <Nav.Link>
              <span
                style={{ color: "white", fontWeight: "900", fontSize: "15px" }}
              >
                Place Order
              </span>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
}

export default CheckoutSteps;

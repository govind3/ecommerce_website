import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const HelpPage = () => {
  return (
    <div>
      {/* Header */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Help Center</Navbar.Brand>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="mt-3">
        <h2>Help</h2>
        <p>
          Welcome to our Help Center. Here you can find answers to common
          questions and information about our product.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          vestibulum ante auctor, posuere velit in, rutrum risus. Nulla eget
          velit varius, fermentum eros vel, maximus tellus. Nullam at ultrices
          odio, sed gravida mi. Proin porttitor tristique fermentum. Ut auctor
          tempus ex. Praesent vitae nunc nec orci convallis volutpat vel in
          metus. Mauris pretium vehicula nibh vitae laoreet.
        </p>
        {/* Add more content as needed */}
      </Container>
    </div>
  );
};

export default HelpPage;

import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const AboutUsPage = () => {
  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      {/* Header */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">About Us</Navbar.Brand>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="mt-5">
        <h2 className="text-center mb-4">About Us</h2>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
          purus eget justo vehicula lacinia. Quisque quis lacus nunc. Aliquam
          erat volutpat. Donec vestibulum urna non posuere accumsan. In
          sollicitudin congue neque, eu egestas ipsum fermentum a. Sed
          sollicitudin efficitur scelerisque.
        </p>
        <p>
          Sed imperdiet metus in tempus ultricies. Vestibulum ut est nisi. Fusce
          ut tortor nec diam ultricies pharetra. Nam at nisi nec metus blandit
          laoreet. Mauris rhoncus nisi id lorem pulvinar congue. Nulla mollis
          semper dolor vel ullamcorper. Aliquam euismod euismod nulla, nec
          gravida risus commodo id. Curabitur at bibendum elit.
        </p>
        <p>
          Fusce at felis ut neque efficitur finibus. Nam maximus augue nec
          lectus fermentum, vitae hendrerit justo aliquet. Sed sit amet augue
          sit amet enim consectetur suscipit a vitae quam. Pellentesque euismod
          orci vitae sapien condimentum, non auctor quam molestie. Integer
          vehicula convallis lorem, in volutpat magna tempor a. Fusce vel
          facilisis metus, non dignissim ex. Morbi interdum purus sed
          consectetur euismod. Vivamus euismod eros at mi condimentum, vitae
          tincidunt eros faucibus. Integer ultricies nulla vel enim semper
          fermentum. Nullam congue lacinia pulvinar. Donec ornare efficitur
          velit, nec scelerisque mauris vehicula ac.
        </p>
      </Container>
    </div>
  );
};

export default AboutUsPage;

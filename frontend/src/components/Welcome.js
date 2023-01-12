import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const Welcome = () => (
  <Jumbotron>
    <h1>Images Gallery</h1>
    <p>This is simple application that returns images.</p>
    <p>
      <Button bsStyle="primary" href="https://unsplash.com">
        Learn more
      </Button>
    </p>
  </Jumbotron>
);

export default Welcome;

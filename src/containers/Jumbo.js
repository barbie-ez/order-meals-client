import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
class Jumbo extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <h1>Meals</h1>
          <p>
            Feel free to select what you wish to cook over the next few weeks of training.
              </p>
        </Container>
      </Jumbotron>
    );
  }
}

export default Jumbo;
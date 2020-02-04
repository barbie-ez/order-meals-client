import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
class Article extends Component {
  render() {
    const listItems = this.props.list.map((item) =>
      <Card.Text>
        {item}
      </Card.Text>
    );
    return (
      <Card style={{ width: '18rem' }} >
        <Card.Header>{this.props.header}</Card.Header>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          {listItems}
          <Button variant="primary">Add</Button>
        </Card.Body>
        <Card.Footer className="text-muted">{this.props.footer}</Card.Footer>
      </Card>
    );
  }
}

export default Article;  
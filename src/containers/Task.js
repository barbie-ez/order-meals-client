import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { requestTaskCreation } from '../store/mutations';
export class Task extends Component {
  render() {
    const listItems = this.props.list.map((item) =>
      <Card.Text key={item.id}>
        {item.name}
      </Card.Text>
    );
    return (
      <Card style={{ width: '18rem' }} >
        <Card.Header>{this.props.header}</Card.Header>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          {listItems}
          <Button onClick={() => this.props.createNewTask(this.props.Id)} variant="primary">Add New</Button>
        </Card.Body>
        <Card.Footer className="text-muted">{this.props.footer}</Card.Footer>
      </Card>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let groupId = ownProps.Id;
  return {
    name: ownProps.name,
    id: groupId,
    tasks: state.tasks.filter(task => task.group === groupId)
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createNewTask(id) {
      console.log("Creatng a new task", id);
      dispatch(requestTaskCreation(id));
    }
  }
};

export const ConnectedTask = connect(mapStateToProps, mapDispatchToProps)(Task);  
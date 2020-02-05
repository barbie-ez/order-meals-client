import React, { useState } from 'react';
import { Nav, Card, Button, Modal, Form, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as mutations from '../store/mutations';
import swal from 'sweetalert';
function TaskModal({ id, comments, task, isComplete, group, groups, updateTask }) {
  const [show, setShow] = useState(false);

  const [taskVal, setTask] = useState(task);
  const [isCompleteVal, setIsComplete] = useState(isComplete);
  const [groupVal, setGroup] = useState(group);
  const [commentsVal, setComment] = useState("");

  // const handleClose = () => { setShow(false); swal("Task Updated", "Your changes have been saved!", "success"); };

  const handleCancelClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  }
  const handleIsCompleteChange = (event) => {
    setIsComplete(event.target.value);
  }
  const handleGroupChange = (event) => {
    setGroup(event.target.value);
  }
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTask(id, isCompleteVal === "on" ? true : false, taskVal, groupVal)
    setShow(false);
    swal("Task Updated", "Your changes have been saved!", "success");
  }
  return (
    <>
      <Card.Text onClick={handleShow}>
        {task}
      </Card.Text >
      <Modal show={show} onHide={handleCancelClose}>
        <Modal.Header closeButton>
          <Modal.Title>{task}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridTask">
                <Form.Label>Task</Form.Label>
                <Form.Control type="text" value={taskVal} onChange={handleTaskChange} placeholder="" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridComment">
                <Form.Label>Comment</Form.Label>
                <Form.Control as="textarea" value={commentsVal} onChange={handleCommentChange} rows="3" placeholder="" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group controlId="formGroup">
                <Form.Label>Group</Form.Label>
                <Form.Control as="select" value={groupVal} onChange={handleGroupChange}>
                  {groups.map(group => (
                    <option key={group.id} value={group.id}>{group.name}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridDone">
                <Form.Check type="checkbox" onChange={handleIsCompleteChange} label="Complete/ Reopen Task" />
              </Form.Group>
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelClose}>
            Close
            </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const mapStateToProps = state => state;


const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.id;
  const name = ownProps.name;
  const groupID = ownProps.group;
  const isComplete = ownProps.isComplete;

  // console.log(id);
  // console.log(name);
  // console.log(groupID);
  // console.log(isComplete);
  return {
    updateTask(id, isComplete, name, groupID) {
      dispatch(mutations.updateTask(id, name, groupID, isComplete))
    }
  }
}

// const mapStateToProps = (state, ownProps) => {
//   let id = ownProps.id;
//   let task = state.tasks.find(task => task.id === id);;
//   let groups = state.groups;
//   console.log(id);
//   let isComplete = false;
//   return {
//     id,
//     task,
//     groups,
//     isComplete
//   }
// };


export const ConnectedTaskModal = connect(mapStateToProps, mapDispatchToProps)(TaskModal);
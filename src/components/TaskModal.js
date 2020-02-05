import React, { useState } from 'react';
import { Nav, Button, Modal, Form, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import swal from 'sweetalert';
function TaskModal({ id, comments, task, isComplete }) {
  const [show, setShow] = useState(false);

  const handleClose = () => { setShow(false); swal("Task Updated", "Your changes have been saved!", "success"); };
  const handleCancelClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow}>
        {task}
      </div >

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridTask">
                <Form.Label>Task</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridComment">
                <Form.Label>Comment</Form.Label>
                <Form.Control as="textarea" rows="3" placeholder="" />
              </Form.Group>

            </Form.Row>
            <Form.Row>

              <Form.Group as={Col} controlId="formGridDone">
                <Form.Check type="checkbox" label="Done" />
              </Form.Group>
            </Form.Row>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelClose}>
            Close
            </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const mapStateToProps = state => state;

export const ConnectedTaskModal = connect(mapStateToProps)(TaskModal);
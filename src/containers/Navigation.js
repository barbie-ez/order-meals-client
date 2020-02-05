import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { ConnectedTaskModal as TaskModal } from '../components/TaskModal'

class Navigation extends Component {
  render() {
    return (

      <Navbar bg="dark" variant="dark" className="ml">
        <Navbar.Brand as={Link} to="/">Order Meals</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/features">Features</Nav.Link>
          <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
          <TaskModal />
        </Nav>
      </Navbar>

    )
  }
}

export const ConnectedNavigation = connect(state => state)(Navigation);
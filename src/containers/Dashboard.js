import React, { Component } from 'react';
import { ConnectedTask as Task } from './Task';
import { Container, Col, Row } from 'react-bootstrap';
import Jumbo from './Jumbo';
import { connect } from 'react-redux';
class Dashboard extends Component {
    render() {
        const lists = [];
        return (
            <>
                <Jumbo />
                <Container>
                    <Row>
                        {this.props.groups.map(group => (

                            <Col key={group.id}><Task key={group.id} Id={group.id} header={group.name} title="What can I Do" list={lists} footer={group.owner} /></Col>

                        ))}
                    </Row>
                </Container>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        groups: state.groups,
        tasks: state.tasks
    }
};

//export default Dashboard;

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
import React, { Component } from 'react';
import Article from './Article';
import { Container, Col, Row } from 'react-bootstrap';
class Dashboard extends Component {
    render() {
        const lists = [];
        return (
            <Container>
                <Row>
                    <Col><Article header="To Do" title="What can I Do" list={lists} footer="2020" /></Col>
                    <Col> <Article header="Doing" title="What can I Do" list={lists} footer="2020" /></Col>
                    <Col> <Article header="Done" title="What can I Do" list={lists} footer="2020" /></Col>
                </Row>
            </Container>
        );
    }
}

export default Dashboard;
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LeftPanel from "./components/LeftPanel";
import Feed from "./components/Feed";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={2} lg={3} className="border-end d-none d-md-block">
                        <LeftPanel />
                    </Col>
                    <Col xs={12} md={7} lg={6} className="p-0">
                        <Feed />
                    </Col>
                    <Col md={3} lg={3} className="border-start d-none d-md-block"></Col>
                </Row>
            </Container>
        );
    }
}

export default App;

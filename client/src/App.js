import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LeftPanel from "./components/LeftPanel";
import Feed from "./components/Feed";
import RightPanel from "./components/RightPanel";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<Container fluid="xl" className="p-0 px-md-2">
				<Row className="g-0">
					<Col sm={2} lg={3} className="border-end border-light d-none d-sm-block">
						<LeftPanel />
					</Col>
					<Col xs={12} sm={10} md={6} xl={5}>
						<Feed />
					</Col>
					<Col md={4} lg={3} xl={4} className="border-start border-light d-none d-sm-block">
						<RightPanel />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default App;

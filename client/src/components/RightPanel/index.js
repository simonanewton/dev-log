import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

class RightPanel extends Component {
    render() {
        return (
            <div className="p-4">
                <div className="py-2 mb-3 d-flex align-items-center">
                    <FontAwesomeIcon icon={faNewspaper} size={"3x"} />
                    <h4 className="ms-3 mb-0 fw-bold d-none d-lg-block">Tech Updates</h4>
                </div>
                <Card className="w-100">
                    <Card.Header>
                        <Card.Title className="m-0">Latest News</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <div className="mb-3">
                            <Card.Title>Stack Overflow</Card.Title>
                            <Card.Subtitle className="text-muted">@StackOverflow | 47m</Card.Subtitle>
                            <Card.Text className="mt-2">On our latest episode, we sat down with @YouveGotFox, CEO & co-founder of @AssemblyAI, to talk about what sparked his interest in AI.</Card.Text>
                        </div>
                        <hr className="w-100" />
                        <div className="mb-3">
                            <Card.Title>GitHub</Card.Title>
                            <Card.Subtitle className="text-muted">@github | 1h</Card.Subtitle>
                            <Card.Text className="mt-2">Do you know the difference between SCA and SAST? Explore these two security approaches to find out which one can keep your code secure.</Card.Text>
                        </div>
                        <hr className="w-100" />
                        <div className="">
                            <Card.Title>Stack Overflow</Card.Title>
                            <Card.Subtitle className="text-muted">@StackOverflow | 2h</Card.Subtitle>
                            <Card.Text className="mt-2">Recently, @richardlau published a post sharing that Node.js v16 will EOL on September 11th, 2023, just about a year from now, to match the EOL of Node.js.</Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default RightPanel;

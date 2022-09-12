import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareRss, faCertificate, faCheck } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

class RightPanel extends Component {
    render() {
        return (
            <div className="px-3 px-lg-4 py-4">
                <div className="py-2 mb-3 d-flex align-items-center">
                    <FontAwesomeIcon icon={faSquareRss} size="3x" />
                    <h4 className="ms-3 mb-0 fw-bold d-none d-md-block">Tech News</h4>
                </div>
                <Card className="w-100">
                    <Card.Header>
                        <Card.Title className="m-0">Latest Updates</Card.Title>
                    </Card.Header>
                    <Card.Body className="px-0">
                        <div className="px-3 py-0 mb-3">
                            <div className="mb-2 d-flex align-items-center">
                                <Card.Title className="m-0">Stack Overflow</Card.Title>
                                <div className="ps-2 position-relative">
                                    <FontAwesomeIcon icon={faCertificate} size="lg" className="text-primary" />
                                    <FontAwesomeIcon icon={faCheck} className="text-white checkmark" />
                                </div>
                            </div>
                            <Card.Subtitle className="text-muted">@StackOverflow | 17m</Card.Subtitle>
                            <Card.Text className="mt-2 news-text">On our latest episode, we sat down with @YouveGotFox, CEO & co-founder of AssemblyAI, to talk about what sparked his interest in AI.</Card.Text>
                        </div>
                        <hr className="w-100" />
                        <div className="px-3 mb-3">
                            <div className="mb-2 d-flex align-items-center">
                                <Card.Title className="m-0">GitHub</Card.Title>
                                <div className="ps-2 position-relative">
                                    <FontAwesomeIcon icon={faCertificate} size="lg" className="text-primary" />
                                    <FontAwesomeIcon icon={faCheck} className="text-white checkmark" />
                                </div>
                            </div>
                            <Card.Subtitle className="text-muted">@github | 2h</Card.Subtitle>
                            <Card.Text className="mt-2 news-text">Do you know the difference between SCA and SAST? Explore these two security approaches to find out which one can keep your code secure.</Card.Text>
                        </div>
                        <hr className="w-100" />
                        <div className="px-3 ">
                            <div className="mb-2 d-flex align-items-center">
                                <Card.Title className="m-0">Node.js</Card.Title>
                                <div className="ps-2 position-relative">
                                    <FontAwesomeIcon icon={faCertificate} size="lg" className="text-primary" />
                                    <FontAwesomeIcon icon={faCheck} className="text-white checkmark" />
                                </div>
                            </div>
                            <Card.Subtitle className="text-muted">@nodejs | 5h</Card.Subtitle>
                            <Card.Text className="mt-2 news-text">Recently, @richardlau published a post sharing that Node.js v16 will EOL on September 11th, 2023, just about a year from now, to match the EOL of Node.js.</Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default RightPanel;

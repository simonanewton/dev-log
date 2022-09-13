import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareRss } from "@fortawesome/free-solid-svg-icons";
import NewsPost from "../NewsPost";
import "./index.css";

class RightPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                    name: "StackOverflow",
                    verified: true,
                    username: "StackOverflow",
                    timestamp: "26m",
                    text: "On our latest episode, we sat down with @YouveGotFox, CEO & co-founder of AssemblyAI, to talk about what sparked his interest in AI.",
                    image: "",
                    link: ""
                },
                {
                    name: "GitHub",
                    verified: true,
                    username: "github",
                    timestamp: "1h",
                    text: "Do you know the difference between SCA and SAST? Explore these two security approaches to find out which one can keep your code secure.",
                    image: "",
                    link: ""
                },
                {
                    name: "Node.js",
                    verified: true,
                    username: "nodejs",
                    text: "Recently, @richardlau published a post sharing that Node.js v16 will EOL on September 11th, 2023, just about a year from now, to match the EOL of Node.js.",
                    image: "3h",
                    link: ""
                },
                {
                    name: "MongoDB",
                    verified: true,
                    username: "MongoDB",
                    timestamp: "5d",
                    text: "You have something to contribute to the conversation — don't be afraid to speak up and use your voice. See how our MDBWomen's panel believes we can break biases in the tech industry and strive for equity in the workplace.",
                    image: "",
                    link: ""
                }
            ]
        }
    }

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
                        <NewsPost post={this.state.posts[0]} />
                        <hr className="w-100" />
                        <NewsPost post={this.state.posts[1]} />
                        <hr className="w-100" />
                        <NewsPost post={this.state.posts[2]} />
                        <hr className="w-100" />
                        <NewsPost post={this.state.posts[3]} />
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default RightPanel;

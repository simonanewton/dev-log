import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareRss, faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import NewsPost from "../NewsPost";
import RabbitImg from "../../assets/images/rabbit.png";
import FoxImg from "../../assets/images/fox.png";
import WalrusImg from "../../assets/images/walrus.png";
import "./index.css";

class RightPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                    profile_img: RabbitImg,
                    name: "StackOverflow",
                    verified: true,
                    username: "StackOverflow",
                    profile_url: "https://twitter.com/StackOverflow",
                    timestamp: "26m",
                    text: "On our latest episode, we sat down with @YouveGotFox, CEO & co-founder of AssemblyAI, to talk about what sparked his interest in AI and machine learning and how their solutions help major companies.",
                    image: ""
                },
                {
                    profile_img: FoxImg,
                    name: "GitHub",
                    verified: true,
                    username: "github",
                    profile_url: "https://twitter.com/github",
                    timestamp: "1h",
                    text: "Want to learn how to use GitHub Actions to deploy storefronts? @Shopify shares the secret to success, and how you can leverage their tips for your own deployments.",
                    image: "",
                },
                {
                    profile_img: WalrusImg,
                    name: "MongoDB",
                    verified: true,
                    username: "MongoDB",
                    profile_url: "https://twitter.com/MongoDB",
                    timestamp: "3d",
                    text: "You have something to contribute to the conversation — don't be afraid to speak up and use your voice. See how our MDBWomen's panel believes we can break biases in the tech industry and strive for equity in the workplace.",
                    image: "",
                }
            ]
        }
    }

    render() {
        return (
            <div className="px-3 px-lg-4 pt-4 pb-5" id="right-panel">
                <div className="py-2 mb-3">
                    <a href="https://twitter.com/i/lists/1568647817408778240" target="_blank" rel="noreferrer" className="d-flex align-items-center panel-link">
                        <FontAwesomeIcon icon={faSquareRss} size="3x" />
                        <h4 className="ms-3 mb-0 fw-bold d-none d-md-block">Technology News</h4>
                    </a>
                </div>
                <Card className="border-0 w-100">
                    <Card.Header className="d-flex justify-content-between align-items-center">
                        <Card.Title className="m-0">Latest Updates</Card.Title>
                        <Card.Link href={"https://twitter.com/i/lists/1568647817408778240"} target="_blank" rel="noreferrer" className="ms-3">
                            <FontAwesomeIcon icon={faArrowUpFromBracket} size="lg" className="text-secondary share-btn" />
                        </Card.Link>
                    </Card.Header>
                    <Card.Body className="px-0">
                        <NewsPost post={this.state.posts[0]} />
                        <hr className="w-100" />
                        <NewsPost post={this.state.posts[1]} />
                        <hr className="w-100" />
                        <NewsPost post={this.state.posts[2]} />
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default RightPanel;

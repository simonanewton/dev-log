import React, { Component } from "react";
import { Card, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faRetweet, faHeart } from "@fortawesome/free-solid-svg-icons";
import FoxImg from "../../assets/images/fox.png";
import "./index.css";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Simon Newton",
            username: "simonanewton",
            date: "2d",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "",
            comments: 1,
            retweets: 2,
            likes: 3,
            tags: ["programmming", "developer", "ReactJS", "Bootstrap"]
        }
    }

    renderBadges = (tags) => {
        let badges = [];
        tags.forEach(tag => {
            badges.push(<Badge pill bg="secondary" key={tag} className="me-2">{`# ${tag}`}</Badge>);
        });
        return badges;
    }

    render() {
        return (
            <Card className="mt-4">
                <Card.Header className="px-4 py-0 bg-transparent d-flex align-items-center">
                    <div className="me-3">
                        <Card.Img src={FoxImg} alt="User profile picture" className="profile-img" />
                    </div>
                    <div className="py-3 d-flex">
                        <div>
                            <Card.Title className="fw-bold">{this.state.name}</Card.Title>
                            <Card.Subtitle className="text-muted">{`@${this.state.username} | ${this.state.date}`}</Card.Subtitle>
                        </div>
                        <div></div>
                    </div>
                </Card.Header>
                <Card.Body className="px-4 py-3">
                    <Card.Text className="mb-2">{this.state.text}</Card.Text>
                    <div className="d-block d-lg-flex justify-content-between align-items-lg-center text-lg-end">
                        <div className="text-secondary d-flex flex-nowrap">
                            <div className="me-4 position-relative">
                                <FontAwesomeIcon icon={faComment} size="lg" />
                                <Badge pill bg="primary" className={`position-absolute top-0 start-50 ${!this.state.comments ? "d-none" : ""}`} style={{ fontSize: "7px" }}>
                                    {this.state.comments}
                                </Badge>
                            </div>
                            <div className="me-4 position-relative">
                                <FontAwesomeIcon icon={faRetweet} size="lg" />
                                <Badge pill bg="primary" className={`position-absolute top-0 start-50 ${!this.state.retweets ? "d-none" : ""}`} style={{ fontSize: "7px" }}>
                                    {this.state.retweets}
                                </Badge>
                            </div>
                            <div className="me-4 position-relative">
                                <FontAwesomeIcon icon={faHeart} size="lg" />
                                <Badge pill bg="primary" className={`position-absolute top-0 start-50 ${!this.state.likes ? "d-none" : ""}`} style={{ fontSize: "7px" }}>
                                    {this.state.likes}
                                </Badge>
                            </div>
                        </div>
                        <div className="mt-2 mt-lg-0">
                            {this.renderBadges(this.state.tags)}
                        </div>
                    </div>
                </Card.Body>
            </Card >
        );
    }
}

export default Post;

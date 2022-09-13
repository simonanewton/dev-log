import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faCheck } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

class NewsPost extends Component {
    render() {
        return (
            <div className="px-3 py-0 mb-3">
                <div className="mb-2 d-flex align-items-center">
                    <Card.Title className="m-0">{this.props.post.name}</Card.Title>
                    {!this.props.post.verified ? (
                        <div className="ps-2 position-relative">
                            <FontAwesomeIcon icon={faCertificate} size="lg" className="text-primary" />
                            <FontAwesomeIcon icon={faCheck} className="text-white checkmark" />
                        </div>
                    ) : null}
                </div>
                <Card.Subtitle className="text-muted">{`@${this.props.post.username}`} | {this.props.post.timestamp}</Card.Subtitle>
                <Card.Text className="mt-2" style={{ fontSize: "smaller" }}>{this.props.post.text}</Card.Text>
            </div>
        );
    }
}

export default NewsPost;

import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faCheck } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

class NewsPost extends Component {
    render() {
        return (
            <div className="px-3 px-lg-4 py-0">
                <div className="d-flex align-items-center">
                    <Card.Link href={this.props.post.profile_url} target="_blank" className="me-2 rounded-circle">
                        <Card.Img src={this.props.post.profile_img} alt="User Profile Picture" className="rounded-circle profile-img-news" />
                    </Card.Link>
                    <div>
                        <div className="d-flex align-items-center">
                            <Card.Text className="mb-0">
                                <Card.Link href={this.props.post.profile_url} target="_blank" className="fw-bold post-link">{this.props.post.name}</Card.Link>
                            </Card.Text>
                            {this.props.post.verified ? (<FontAwesomeIcon icon={faCheck} mask={faCertificate} size="lg" transform="shrink-7" className="ps-2 text-primary" />) : null}
                        </div>
                        <div className="d-flex align-items-center">
                            <Card.Text className="me-1 mb-0 text-muted">
                                <span>@</span>
                                <Card.Link href={this.props.post.profile_url} target="_blank" className="post-link">
                                    {this.props.post.username}
                                </Card.Link>
                            </Card.Text>
                            <Card.Text className="mb-0 text-muted text-nowrap">{`| ${this.props.post.timestamp}`}</Card.Text>
                        </div>
                    </div>
                </div>
                <Card.Text className="mt-2">{this.props.post.text}</Card.Text>
            </div>
        );
    }
}

export default NewsPost;

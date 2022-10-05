import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faCheck, faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

class NewsPost extends Component {
    render() {
        return (
            <div className="px-3 px-lg-4 py-3 border-top border-2">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <Card.Link href={this.props.post.profile_url} target="_blank" className="me-2 rounded-circle">
                            <Card.Img src={this.props.post.profile_img} alt="User Profile Picture" className="rounded-circle profile-img-news" />
                        </Card.Link>
                        <div>
                            <div className="mb-1 d-flex align-items-center">
                                <Card.Title as={"h6"} className="mb-0">
                                    <Card.Link href={this.props.post.profile_url} target="_blank" className="post-link">{this.props.post.name}</Card.Link>
                                </Card.Title>
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
                    <Card.Link href={this.props.post.url} target="_blank" className="ps-3 pe-1 d-none d-lg-flex">
                        <FontAwesomeIcon icon={faArrowUpFromBracket} size="lg" className="text-secondary share-btn" />
                    </Card.Link>
                </div>
                <Card.Text className="mt-2">{this.props.post.text}</Card.Text>
            </div>
        );
    }
}

export default NewsPost;

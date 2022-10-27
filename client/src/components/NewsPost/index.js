import React, { Component } from "react";
import { Card, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faCheck, faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

class NewsPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showProfileModal: false
        }
    }

    convertTimestamp = (timestamp) => {
        const converted = new Date(Date.parse(timestamp));
        const seconds = Math.floor((new Date() - converted) / 1000);

        let interval = seconds / 2592000;
        if (interval > 1) return converted.toLocaleDateString('en-us', { weekday: "long", month: "short", day: "numeric" });

        interval = seconds / 604800;
        if (interval > 1) return Math.floor(interval) + "w ago";

        interval = seconds / 86400;
        if (interval > 1) return Math.floor(interval) + "d ago";

        interval = seconds / 3600;
        if (interval > 1) return Math.floor(interval) + "h ago";

        interval = seconds / 60;
        if (interval > 1) return Math.floor(interval) + "m ago";

        return Math.floor(interval) + "s ago";
    }

    toggleProfileModal = () => {
        this.setState({ showProfileModal: !this.state.showProfileModal });
    }

    render() {
        return (
            <div className="px-3 px-lg-4 py-3 border-top border-2">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <div className="me-2 me-lg-3">
                            <Card.Img src={this.props.post.profile_img} alt="User Profile Picture" onClick={this.toggleProfileModal} className="rounded-circle profile-img-news" />
                            <Modal centered size="sm" show={this.state.showProfileModal} onHide={this.toggleProfileModal} className="rounded-circle">
                                <Card.Img src={this.props.post.profile_img} className="rounded-circle" />
                            </Modal>
                        </div>
                        <div>
                            <div className="mb-2 d-flex align-items-center">
                                <Card.Title as={"h6"} className="mb-0">
                                    <Card.Link href={this.props.post.profile_url} target="_blank" className="post-link">{this.props.post.profile_name}</Card.Link>
                                </Card.Title>
                                {this.props.post.verified ? (<FontAwesomeIcon icon={faCheck} mask={faCertificate} size="lg" transform="shrink-7" className="ps-2 text-primary" />) : null}
                            </div>
                            <div className="d-flex align-items-center">
                                <Card.Subtitle className="me-1 text-muted fw-normal">
                                    <span>@</span>
                                    <Card.Link href={this.props.post.profile_url} target="_blank" className="post-link">{this.props.post.profile_username}</Card.Link>
                                </Card.Subtitle>
                                <Card.Subtitle className="text-muted text-nowrap fw-normal">{`| ${this.convertTimestamp(this.props.post.timestamp)}`}</Card.Subtitle>
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

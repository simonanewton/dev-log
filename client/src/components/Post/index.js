import React, { Component } from "react";
import { Card, Modal, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket, faComment, faRetweet, faHeart } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showProfileModal: false,
            showImgModal: false
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

    toggleImgModal = () => {
        this.setState({ showImgModal: !this.state.showImgModal });
    }

    render() {
        return (
            <Card className="mt-4 border-0">
                <Card.Header className="px-4 pb-0 bg-transparent border-bottom-0 d-flex align-items-center">
                    <div className="me-2 me-sm-3">
                        <Card.Img src={this.props.post.profile_img} alt="User Profile Picture" onClick={this.toggleProfileModal} className="rounded-circle profile-img" />
                        <Modal centered size="sm" show={this.state.showProfileModal} onHide={this.toggleProfileModal} className="rounded-circle">
                            <Card.Img src={this.props.post.profile_img} className="rounded-circle" />
                        </Modal>
                    </div>
                    <div className="py-3 d-flex justify-content-between align-items-center w-100">
                        <div>
                            <Card.Link href={this.props.post.profile_url} target="_blank" className="post-link">
                                <Card.Title>{this.props.post.profile_name}</Card.Title>
                            </Card.Link>
                            <div className="d-flex align-items-center">
                                <Card.Subtitle className="me-1 text-muted fw-normal">
                                    <span>@</span>
                                    <Card.Link href={this.props.post.profile_url} target="_blank" className="post-link">{this.props.post.profile_username}</Card.Link>
                                </Card.Subtitle>
                                <Card.Subtitle className="text-muted text-nowrap fw-normal d-none d-sm-block">{`| ${this.convertTimestamp(this.props.post.timestamp)}`}</Card.Subtitle>
                            </div>
                        </div>
                        <Card.Link href={`https://twitter.com/simonanewtondev/status/${this.props.post.tweet_id}`} target="_blank" className="mx-2">
                            <FontAwesomeIcon icon={faArrowUpFromBracket} size="lg" className="text-secondary share-btn" />
                        </Card.Link>
                    </div>
                </Card.Header>
                <Card.Body className="px-4 pt-0 pb-3">
                    <Card.Text className="mb-3">{this.props.post.text}</Card.Text>
                    <div>
                        <Card.Img src={this.props.post.image} onClick={this.toggleImgModal} className={`mb-3 bg-light border border-light post-img ${!this.props.post.image ? "d-none" : ""}`} />
                        <Modal size="lg" centered show={this.state.showImgModal} onHide={this.toggleImgModal} className="post-modal">
                            <Card.Img src={this.props.post.image} className="rounded" />
                        </Modal>
                    </div>
                    <div className="mb-1 d-block d-lg-flex justify-content-between align-items-lg-center text-lg-end">
                        <div className="d-flex flex-nowrap">
                            <Card.Link href={this.props.post.stats[0].comments ? (`https://twitter.com/simonanewtondev/status/${this.props.post.tweet_id}/comments`) : null} target="_blank" className="ms-0 me-4 me-lg-5 position-relative post-icon">
                                <FontAwesomeIcon icon={faComment} size="lg" className="text-secondary" />
                                <Badge pill bg="primary" className={`position-absolute top-0 start-50 ${!this.props.post.stats[0].comments ? "d-none" : ""}`} style={{ fontSize: "9px" }}>
                                    {this.props.post.stats[0].comments}
                                </Badge>
                            </Card.Link>
                            <Card.Link href={this.props.post.stats[1].retweets ? (`https://twitter.com/simonanewtondev/status/${this.props.post.tweet_id}/retweets`) : null} target="_blank" className="ms-0 me-4 me-lg-5 position-relative post-icon">
                                <FontAwesomeIcon icon={faRetweet} size="lg" className="text-secondary" />
                                <Badge pill bg="primary" className={`position-absolute top-0 start-50 ${!this.props.post.stats[1].retweets ? "d-none" : ""}`} style={{ fontSize: "9px" }}>
                                    {this.props.post.stats[1].retweets}
                                </Badge>
                            </Card.Link>
                            <Card.Link href={this.props.post.stats[2].likes ? (`https://twitter.com/simonanewtondev/status/${this.props.post.tweet_id}/likes`) : null} target="_blank" className="ms-0 me-4 me-lg-5 position-relative post-icon">
                                <FontAwesomeIcon icon={faHeart} size="lg" className="text-secondary" />
                                <Badge pill bg="primary" className={`position-absolute top-0 start-50 ${!this.props.post.stats[2].likes ? "d-none" : ""}`} style={{ fontSize: "9px" }}>
                                    {this.props.post.stats[2].likes}
                                </Badge>
                            </Card.Link>
                        </div>
                        <div className="mt-3 mt-lg-0">
                            {this.props.post.tags.map(tag => <Badge key={tag} as={"a"} href={`https://twitter.com/search?q=%23${tag}`} target="_blank" pill bg="secondary" className="me-2 fw-normal hashtag">{`# ${tag}`}</Badge>)}
                        </div>
                    </div>
                </Card.Body>
            </Card >
        );
    }
}

export default Post;

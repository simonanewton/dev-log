import React, { Component } from "react";
import { Card, Modal, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket, faComment, faRetweet, faHeart } from "@fortawesome/free-solid-svg-icons";
import LightbulbImg from "../../assets/images/lightbulb.png";
import "./index.css";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    convertTimestamp = (timestamp) => {
        return new Date(Date.parse(timestamp)).toLocaleDateString('en-us', { weekday: "long", month: "short", day: "numeric" });
    }

    toggleModal = () => {
        this.setState({ showModal: !this.state.showModal });
    }

    renderBadges = (tags) => {
        let badges = [];
        tags.forEach(tag => {
            badges.push(<Badge key={tag} as={"a"} href={`https://twitter.com/search?q=%23${tag}`} target="_blank" pill bg="secondary" className="me-2 fw-normal hashtag">{`# ${tag}`}</Badge>);
        });
        return badges;
    }

    render() {
        return (
            <Card className="mt-4 border-0">
                <Card.Header className="px-4 pb-0 bg-transparent border-bottom-0 d-flex align-items-center">
                    <Card.Link href={this.props.post.profile_url} target="_blank" className="me-2 me-sm-3 rounded-circle">
                        <Card.Img src={LightbulbImg} alt="User Profile Picture" className="rounded-circle profile-img" />
                    </Card.Link>
                    <div className="py-3 d-flex justify-content-between align-items-center w-100">
                        <div>
                            <Card.Title>
                                <Card.Link href={this.props.post.profile_url} target="_blank" className="post-link">{this.props.post.profile_name}</Card.Link>
                            </Card.Title>
                            <div className="d-flex align-items-center">
                                <Card.Subtitle className="me-1 text-muted fw-normal">
                                    <span>@</span>
                                    <Card.Link href={this.props.post.profile_url} target="_blank" className="post-link">{this.props.post.profile_username}</Card.Link>
                                </Card.Subtitle>
                                <Card.Subtitle className="text-muted text-nowrap fw-normal">{`| ${this.convertTimestamp(this.props.post.timestamp)}`}</Card.Subtitle>
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
                        <Card.Img src={this.props.post.image} alt={""} onClick={this.toggleModal} className={`mb-3 bg-light border border-light post-img ${!this.props.post.image ? "d-none" : ""}`} />
                        <Modal size="xl" centered show={this.state.showModal} onHide={this.toggleModal}>
                            <Card.Img src={this.props.post.image} alt={""} className="rounded" />
                        </Modal>
                    </div>
                    <div className="mb-1 d-block d-lg-flex justify-content-between align-items-lg-center text-lg-end">
                        <div className="d-flex flex-nowrap">
                            <Card.Link href={this.props.post.stats[0].comments ? (`https://twitter.com/simonanewtondev/status/${this.props.post.tweet_id}/comments`) : null} target="_blank" className="ms-0 me-5 position-relative post-icon">
                                <FontAwesomeIcon icon={faComment} size="lg" className="text-secondary" />
                                <Badge pill bg="primary" className={`position-absolute top-0 start-50 ${!this.props.post.stats[0].comments ? "d-none" : ""}`} style={{ fontSize: "9px" }}>
                                    {this.props.post.stats[0].comments}
                                </Badge>
                            </Card.Link>
                            <Card.Link href={this.props.post.stats[1].retweets ? (`https://twitter.com/simonanewtondev/status/${this.props.post.tweet_id}/retweets`) : null} target="_blank" className="ms-0 me-5 position-relative post-icon">
                                <FontAwesomeIcon icon={faRetweet} size="lg" className="text-secondary" />
                                <Badge pill bg="primary" className={`position-absolute top-0 start-50 ${!this.props.post.stats[1].retweets ? "d-none" : ""}`} style={{ fontSize: "9px" }}>
                                    {this.props.post.stats[1].retweets}
                                </Badge>
                            </Card.Link>
                            <Card.Link href={this.props.post.stats[2].likes ? (`https://twitter.com/simonanewtondev/status/${this.props.post.tweet_id}/likes`) : null} target="_blank" className="ms-0 me-5 position-relative post-icon">
                                <FontAwesomeIcon icon={faHeart} size="lg" className="text-secondary" />
                                <Badge pill bg="primary" className={`position-absolute top-0 start-50 ${!this.props.post.stats[2].likes ? "d-none" : ""}`} style={{ fontSize: "9px" }}>
                                    {this.props.post.stats[2].likes}
                                </Badge>
                            </Card.Link>
                        </div>
                        <div className="mt-2 mt-lg-0">
                            {this.renderBadges(this.props.post.tags)}
                        </div>
                    </div>
                </Card.Body>
            </Card >
        );
    }
}

export default Post;

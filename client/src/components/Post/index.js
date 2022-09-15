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
        return timestamp;
    }

    toggleModal = () => {
        this.setState({ showModal: !this.state.showModal });
    }

    renderBadges = (tags) => {
        let badges = [];
        tags.forEach(tag => {
            badges.push(
                <Badge as={"a"} href={`https://twitter.com/search?q=%23${tag}`} target="_blank" pill bg="secondary" key={tag} className="me-2 hashtag">
                    {`# ${tag}`}
                </Badge>);
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
                                <Card.Link href={this.props.post.profile_url} target="_blank" className="fw-bold post-link">{this.props.post.name}</Card.Link>
                            </Card.Title>
                            <div className="d-flex align-items-center">
                                <Card.Subtitle className="me-1 text-muted">
                                    <span>@</span>
                                    <Card.Link href={this.props.post.profile_url} target="_blank" className="post-link">{this.props.post.username}</Card.Link>
                                </Card.Subtitle>
                                <Card.Subtitle className="text-muted text-nowrap">{`| ${this.props.post.timestamp}`}</Card.Subtitle>
                            </div>
                        </div>
                        <Card.Link href={this.props.post.url} target="_blank" className="mx-2">
                            <FontAwesomeIcon icon={faArrowUpFromBracket} size="lg" className="text-secondary share-btn" />
                        </Card.Link>
                    </div>
                </Card.Header>
                <Card.Body className="px-4 pt-0 pb-3">
                    <Card.Text className="mb-3">{this.props.post.text}</Card.Text>
                    <div>
                        <Card.Img src={this.props.post.image} alt={""} onClick={this.toggleModal} className={`mb-3 border post-img ${!this.props.post.image ? "d-none" : ""}`} />
                        <Modal size="xl" centered show={this.state.showModal} onHide={this.toggleModal}>
                            <Card.Img src={this.props.post.image} alt={""} className="rounded" />
                        </Modal>
                    </div>
                    <div className="mb-1 d-block d-lg-flex justify-content-between align-items-lg-center text-lg-end">
                        <div className="d-flex flex-nowrap">
                            <Card.Link href={this.props.post.comments ? (`${this.props.post.url}/comments`) : null} target="_blank" className="ms-0 me-4 position-relative post-icon">
                                <FontAwesomeIcon icon={faComment} size="lg" className="text-secondary" />
                                <Badge pill bg="primary" className={`position-absolute top-0 start-50 ${!this.props.post.comments ? "d-none" : ""}`} style={{ fontSize: "9px" }}>
                                    {this.props.post.comments}
                                </Badge>
                            </Card.Link>
                            <Card.Link href={this.props.post.retweets ? (`${this.props.post.url}/retweets`) : null} target="_blank" className="ms-0 me-4 position-relative post-icon">
                                <FontAwesomeIcon icon={faRetweet} size="lg" className="text-secondary" />
                                <Badge pill bg="primary" className={`position-absolute top-0 start-50 ${!this.props.post.retweets ? "d-none" : ""}`} style={{ fontSize: "9px" }}>
                                    {this.props.post.retweets}
                                </Badge>
                            </Card.Link>
                            <Card.Link href={this.props.post.likes ? (`${this.props.post.url}/likes`) : null} target="_blank" className="ms-0 me-4 position-relative post-icon">
                                <FontAwesomeIcon icon={faHeart} size="lg" className="text-secondary" />
                                <Badge pill bg="primary" className={`position-absolute top-0 start-50 ${!this.props.post.likes ? "d-none" : ""}`} style={{ fontSize: "9px" }}>
                                    {this.props.post.likes}
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
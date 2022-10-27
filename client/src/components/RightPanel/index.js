import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareRss } from "@fortawesome/free-solid-svg-icons";
import NewsPost from "../NewsPost";
import "./index.css";

class RightPanel extends Component {
    render() {
        return (
            <div className="px-3 px-lg-4 pt-4 pb-5" id="right-panel">
                <div className="py-2 mb-3">
                    <a href="https://twitter.com/i/lists/1568647817408778240" target="_blank" rel="noreferrer" className="d-flex align-items-center panel-link">
                        <FontAwesomeIcon icon={faSquareRss} size="3x" />
                        <h4 className="ms-3 mb-0 d-none d-md-block">Developer News</h4>
                    </a>
                </div>
                <Card className="border-0 w-100">
                    <Card.Header className="border-0 d-flex align-items-center">
                        <Card.Title className="m-0">Latest Updates</Card.Title>
                    </Card.Header>
                    <Card.Body className="p-0">
                        {this.props.news ? this.props.news.map(post => <NewsPost key={post.tweet_id} post={post} />) : null}
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default RightPanel;

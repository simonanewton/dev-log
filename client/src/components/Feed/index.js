import React, { Component } from "react";
import MobileHeader from "../MobileHeader";
import Post from "../Post";
import "./index.css";

class Feed extends Component {
    renderPosts = () => {
        let posts = [];
        this.props.tweets.forEach(tweet => {
            posts.push(<Post key={tweet.tweet_id} post={tweet} />);
        });
        return posts;
    }

    render() {
        return (
            <div>
                <div className="d-block d-lg-none">
                    <MobileHeader />
                </div>
                <div className="px-4 px-md-3 px-lg-4 pt-2 pb-4">
                    {this.renderPosts()}
                </div>
            </div>
        );
    }
}

export default Feed;

import React, { Component } from "react";
import MobileHeader from "../MobileHeader";
import Post from "../Post";
import "./index.css";

class Feed extends Component {
    render() {
        return (
            <div>
                <MobileHeader />
                <div className="px-4 px-md-3 px-lg-4 pt-2 pb-4">
                    {this.props.tweets.map(tweet => <Post key={tweet.tweet_id} post={tweet} />)}
                </div>
            </div>
        );
    }
}

export default Feed;

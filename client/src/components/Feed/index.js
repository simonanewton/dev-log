import React, { Component } from "react";
import Post from "../Post";
import "./index.css";

class Feed extends Component {
    render() {
        return (
            <div className="px-4 pt-2 pb-4">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        );
    }
}

export default Feed;

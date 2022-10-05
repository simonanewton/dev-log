import React, { Component } from "react";
import MobileHeader from "../MobileHeader";
import Post from "../Post";
import "./index.css";

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post_data: {
                id: "1569807515721818113",
                url: "https://twitter.com/simonanewtondev/status/1569807515721818113",
                profile_img: "https://pbs.twimg.com/profile_images/1569806886152675328/r2a9yAWG_normal.jpg",
                name: "Simon Newton",
                username: "simonanewton",
                profile_url: "https://twitter.com/simonanewtondev",
                timestamp: "18m",
                text: "As a web developer, one of the things I struggle with is coming up with interesting styling for each of my projects. I'd like to look at some visually creative sites for inspiration, so if you have any links or feedback please feel to share!",
                image: "https://pbs.twimg.com/media/FckTTyZWIAE_vpY.png",
                comments: 0,
                retweets: 0,
                likes: 3,
                tags: ["webdevelopment", "ReactJS", "Bootstrap"]
            }
        }
    }

    renderPosts = () => {
        let posts = [];
        this.props.tweets.forEach(tweet => {
            posts.push(<Post key={tweet} post={tweet} />);
        });
        return posts;
    }

    render() {
        return (
            <div>
                <div className="mobile-only">
                    <MobileHeader />
                </div>
                <div className="px-4 px-md-3 px-lg-4 pt-2 pb-4">
                    <Post post={this.state.post_data} />
                    <Post post={this.state.post_data} />
                </div>
            </div>
        );
    }
}

export default Feed;

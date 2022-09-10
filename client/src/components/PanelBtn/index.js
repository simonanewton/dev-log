import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

class Post extends Component {
    render() {
        return (
            <Button variant={`outline-${this.props.color}`} size="lg" className="px-2 px-lg-4 py-2 mb-3 w-100 panel-btn">
                <div className="d-flex justify-content-center justify-content-lg-end align-items-center">
                    <span className={`me-3 d-none d-lg-inline ${this.props.color !== "primary" ? "text-dark" : ""}`}>{this.props.title}</span>
                    <FontAwesomeIcon icon={this.props.icon} size="lg" style={{ minWidth: "25px" }} />
                </div>
            </Button>
        );
    }
}

export default Post;

import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

class PanelBtn extends Component {
    render() {
        return (
            <div className="rounded-pill bg-white mb-4">
                <Button variant={this.props.color} size="lg" href={this.props.link} target={(this.props.link === "/") ? "" : "_blank"}
                    onClick={this.props.toggle} className="px-2 px-lg-4 py-2 border-0 rounded-pill w-100">
                    <div className="d-flex justify-content-center justify-content-xl-end align-items-center">
                        <span className="me-3 d-none d-xl-inline">{this.props.title}</span>
                        <FontAwesomeIcon icon={this.props.icon} size="lg" style={{ minWidth: "25px" }} />
                    </div>
                </Button>
            </div>
        );
    }
}

export default PanelBtn;

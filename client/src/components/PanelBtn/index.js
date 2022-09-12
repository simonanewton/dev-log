import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

class PanelBtn extends Component {
    render() {
        return (
            <div className="rounded-pill bg-white mb-3">
                <Button variant={this.props.color} size="lg" href={this.props.link} target="_blank" className="px-2 px-lg-4 py-2 rounded-pill w-100">
                    <div className="d-flex justify-content-center justify-content-lg-end align-items-center">
                        <span className="me-3 d-none d-lg-inline">{this.props.title}</span>
                        <FontAwesomeIcon icon={this.props.icon} size="lg" style={{ minWidth: "25px" }} />
                    </div>
                </Button>
            </div>
        );
    }
}

export default PanelBtn;

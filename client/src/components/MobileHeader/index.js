import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faBars } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

class MobileHeader extends Component {
    render() {
        return (
            <div className="px-4 pt-4 d-flex justify-content-between align-items-center">
                <a href="/" className="d-flex align-items-center panel-link">
                    <FontAwesomeIcon icon={faLaptopCode} size="3x" />
                    <h2 className="ms-3 mb-0 fw-bold">Developer Log</h2>
                </a>
                <Button variant="outline-dark" className="ms-3 border border-dark border-2">
                    <FontAwesomeIcon icon={faBars} size="2x" />
                </Button>
            </div>
        );
    }
}

export default MobileHeader;

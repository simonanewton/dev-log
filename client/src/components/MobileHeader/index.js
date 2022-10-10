import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faBars } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

class MobileHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        }
    }

    toggleMobileMenu = () => {
        this.setState({ showMenu: !this.state.showMenu });
    }
    
    render() {
        return (
            <div className="px-4 pt-4 d-flex justify-content-between align-items-center d-block d-sm-none">
                <a href="/" className="d-flex align-items-center panel-link">
                    <FontAwesomeIcon icon={faLaptopCode} size="3x" />
                    <h2 className="ms-3 mb-0 fw-bold">Developer Log</h2>
                </a>
                <Button onClick={this.toggleMobileMenu} className="ms-3 text-dark bg-transparent border-0" id="mobile-menu-icon">
                    <FontAwesomeIcon icon={faBars} size="3x" />
                </Button>
            </div>
        );
    }
}

export default MobileHeader;

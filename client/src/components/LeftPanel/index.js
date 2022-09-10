import React, { Component } from "react";
import { faHouseUser, faGlobe, faServer, faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import PanelBtn from "../PanelBtn";
import Logo from "../../assets/images/computer.png";
import "./index.css";

class LeftPanel extends Component {
    render() {
        return (
            <div className="p-4">
                <div className="py-2 mb-4 d-flex justify-content-center justify-content-lg-end align-items-center">
                    <h4 className="me-2 me-xl-3 text-nowrap d-none d-lg-block">Developer Log</h4>
                    <img src={Logo} alt="Website Logo" id="header-logo" />
                </div>
                <div className="text-center text-lg-end w-100">
                    <PanelBtn color={"secondary"} title={"Home"} icon={faHouseUser} />
                    <PanelBtn color={"secondary"} title={"Global"} icon={faGlobe} />
                    <PanelBtn color={"secondary"} title={"Twitter"} icon={faServer} />
                    <PanelBtn color={"secondary"} title={"About"} icon={faSquareArrowUpRight} />
                    <PanelBtn color={"primary"} title={"Profile"} icon={faTwitter} />
                </div>
            </div>
        );
    }
}

export default LeftPanel;

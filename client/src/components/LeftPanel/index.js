import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faHouseUser, faServer, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import PanelBtn from "../PanelBtn";
import "./index.css";

class LeftPanel extends Component {
    render() {
        return (
            <div className="px-3 px-lg-4 py-4">
                <div className="py-2 mb-4">
                    <a href="/" className="d-flex justify-content-center align-items-center panel-link">
                        <FontAwesomeIcon icon={faLaptopCode} size="3x" />
                    </a>
                </div>
                <div className="text-center text-lg-end w-100">
                    <PanelBtn color={"outline-dark"} title={"Home"} icon={faHouseUser} />
                    <PanelBtn color={"outline-dark"} title={"About"} icon={faCircleInfo} />
                    <PanelBtn color={"outline-dark"} link={"https://developer.twitter.com/en/docs/twitter-api"} title={"Twitter"} icon={faServer} />
                    <PanelBtn color={"outline-dark"} link={"https://github.com/simonanewton/dev-log"} title={"GitHub"} icon={faGithub} />
                    <PanelBtn color={"primary"} link={"https://twitter.com/simonanewtondev"} title={"Profile"} icon={faTwitter} />
                </div>
            </div>
        );
    }
}

export default LeftPanel;

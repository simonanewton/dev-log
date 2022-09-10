import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faHouseUser, faEarthAmericas, faServer, faCircleInfo, faSquareArrowUpRight} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import PanelBtn from "../PanelBtn";
import "./index.css";

class LeftPanel extends Component {
    render() {
        return (
            <div className="p-4">
                <div className="py-2 mb-4 d-flex justify-content-center justify-content-lg-end align-items-center">
                    <h4 className="me-2 me-xl-3 mb-0 fw-bold d-none d-lg-block">Developer Log</h4>
                    <FontAwesomeIcon icon={faLaptopCode} size={"3x"} />
                </div>
                <div className="text-center text-lg-end w-100">
                    <PanelBtn color={"outline-dark"} title={"Home"} icon={faHouseUser} />
                    <PanelBtn color={"outline-dark"} title={"Global"} icon={faEarthAmericas} />
                    <PanelBtn color={"outline-dark"} title={"Learn"} icon={faCircleInfo} />
                    <PanelBtn color={"outline-dark"} title={"Twitter"} icon={faServer} />
                    <PanelBtn color={"outline-dark"} title={"About"} icon={faSquareArrowUpRight} />
                    <PanelBtn color={"primary"} title={"Profile"} icon={faTwitter} />
                </div>
            </div>
        );
    }
}

export default LeftPanel;

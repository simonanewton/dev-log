import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faHouseUser, faServer, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import PanelBtn from "../PanelBtn";
import "./index.css";

class LeftPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    toggleModal = () => {
        this.setState({ showModal: !this.state.showModal });
    }

    render() {
        return (
            <div className="px-3 px-lg-4 py-4">
                <div className="py-2 mb-4 d-flex justify-content-center">
                    <a href="/" className="panel-link">
                        <FontAwesomeIcon icon={faLaptopCode} size="3x" />
                    </a>
                </div>
                <div className="text-center text-lg-end w-100">
                    <PanelBtn color={"outline-dark"} link={"/"} title={"Home"} icon={faHouseUser} />
                    <PanelBtn color={"outline-dark"} toggle={this.toggleModal} title={"About"} icon={faCircleInfo} />
                    <PanelBtn color={"outline-dark"} link={"https://developer.twitter.com/en/docs/twitter-api"} title={"Twitter"} icon={faServer} />
                    <PanelBtn color={"outline-dark"} link={"https://github.com/simonanewton/dev-log"} title={"GitHub"} icon={faGithub} />
                    <PanelBtn color={"primary"} link={"https://twitter.com/simonanewtondev"} title={"Profile"} icon={faTwitter} />
                </div>
                <Modal centered show={this.state.showModal} onHide={this.toggleModal}>
                    <Modal.Header className="px-4" closeButton>
                        <Modal.Title>Web Developer Log</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="px-4">
                        <p>This is an application that showcases tweets from my personal developer Twitter account. You can find
                            updates on what I'm currently working on, thoughts and comments I have while programming, and resources
                            I find while researching.
                        </p>
                        <p>This application utilizes the official Twitter API to import live data, which is then stored in a
                            MongoDB database. Tweets are imported from both my personal profile and a Twitter list made up of
                            official accounts for various technologies and programs that I interact with while developing.
                        </p>
                        <p>If you want to learn more about this project, head over to the GitHub repository and scroll down to
                            read the included documentation.
                        </p>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default LeftPanel;

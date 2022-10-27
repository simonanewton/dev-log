# Web Developer Portfolio

<div align="center">
    <img src="./assets/site-header.png" alt="Web Developer Log Header" width="80%" />
</div>

## Description

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Table of Contents

* [Description](#description)
* [Development](#development)
* [Installation](#installation)
* [Usage](#usage)
* [Reflection](#reflection)
* [Contributing](#contributing)
* [Credits](#credits)
* [License](#license)

## Development

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

```js
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tweets: [],
			news: []
		}
	}

	componentDidMount = async () => {
		const response = await API.updateTweets();
		console.log(response);

		const tweets = await API.getTweets();
		const listTweets = await API.getListTweets();
		this.setState({ tweets: tweets.data, news: listTweets.data });
	}

	render() {
		return (
			<Container fluid="xxl" className="px-0 h-100">
				<Row className="g-0 vh-100">
					<Col sm={2} className="border-end border-white border-3...">
						<LeftPanel />
					</Col>
					<Col xs={12} sm={10} md={6} className="h-100 overflow-auto">
						<Feed tweets={this.state.tweets} />
					</Col>
					<Col md={4} className="border-start border-white border-3...">
						<RightPanel news={this.state.news} />
					</Col>
				</Row>
			</Container>
		);
	}
}
```

## Installation

To install the required npm packages to run this application, clone the repository and run the following command:
```sh
npm install
```

## Usage

To use this application, run the following command:
```sh
npm start
```

## Reflection

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Contributing

<div>
    <img src="./assets/profile-picture-circle.png" alt="Simon Newton Profile Picture" width=250 />
    <h3><b>Simon Newton</b></h3>
    <hr align=left width=350 />
    <p>Hey I'm Simon and I'm a Junior Full-Stack Web Developer!</p>
    <a href="https://github.com/simonanewton" target="_blank">GitHub Profile</a> | <a href="https://www.linkedin.com/in/simon-newton-2a7440129/" target="_blank">LinkedIn Profile</a> | <a href="https://simonanewton.herokuapp.com/" target="_blank">Personal Website</a>
</div>

## Credits

External API Reference
* https://developer.twitter.com/en/docs/twitter-api

Development Resources
* https://fontawesome.com/
* https://reactjs.org/
* https://react-bootstrap.github.io/

Primary NPM Packages
* https://npmjs.com/package/react
* https://npmjs.com/package/react-bootstrap
* https://npmjs.com/package/mongoose
* https://npmjs.com/package/express

## License

[![license](https://img.shields.io/badge/license-MIT-green)](https://simonanewton.mit-license.org)

MIT License &copy; Simon Newton <https://simonanewton.mit-license.org>

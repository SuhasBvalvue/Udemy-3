import React, { Component } from "react";

import "./App.css";
import Person from "./Person/Person";

class App extends Component {
	state = {
		person: [
			{ name: "suhas", age: 22 },
			{ name: "Dipak", age: 42 },
			{ name: "Rohan", age: 32 },
		],
		showAlert: false,
	};

	switchHandler = newName => {
		this.setState({
			person: [
				{ name: newName, age: 43 },
				{ name: "Arjun", age: 50 },
				{ name: "Manish", age: 42 },
			],
		});
	};

	toggleAlertHandler = () => {
		const doesShow = this.state.showAlert;
		this.setState({ showAlert: !doesShow });
	};

	nameChangeHandler = event => {
		this.setState({
			person: [
				{ name: "max", age: 43 },
				{ name: event.target.value, age: 50 },
				{ name: "Manish", age: 42 },
			],
		});
	};

	render() {
		let person = null;
		if (this.state.showAlert) {
			person = (
				<div
					className="alert alert-warning alert-dismissible fade show"
					role="alert"
				>
					<strong>Holy guacamole!</strong> You should check in on some of
					those fields below.
					<span aria-hidden="true">&times;</span>
				</div>
			);
		}

		return (
			<div className="App" className="alert alert-success">
				<br></br>
				<button
					className="btn btn-info"
					onClick={this.switchHandler.bind(this, "Min!!")}
				>
					Click this!
				</button>
				<br></br>
				<br></br>
				<button className="btn btn-info" onClick={this.toggleAlertHandler}>
					Show Alert
				</button>

				<div>
					<Person
						name={this.state.person[0].name}
						age={this.state.person[0].age}
					></Person>
					<Person
						name={this.state.person[1].name}
						age={this.state.person[1].age}
						onClick={this.switchHandler.bind(this, "Max!!")}
						changed={this.nameChangeHandler}
					></Person>
					<Person
						name={this.state.person[2].name}
						age={this.state.person[2].age}
					></Person>
					{person}
				</div>
			</div>
		);
	}
}

export default App;

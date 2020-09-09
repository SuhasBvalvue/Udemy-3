import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import person from "./Person/Person";
import Person from "./Person/Person";

class App extends Component {
	state = {
		person: [
			{ name: "suhas", age: 22 },
			{ name: "Dipak", age: 42 },
			{ name: "Rohan", age: 32 },
		],
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
		return (
			<div className="App" class="alert alert-success">
				<br></br>
				<button
					class="btn btn-info"
					onClick={this.switchHandler.bind(this, "Min!!")}
				>
					Click this!
				</button>
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
			</div>
		);
	}
}

export default App;

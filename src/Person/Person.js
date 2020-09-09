import React from "react";
import { render } from "@testing-library/react";

const person = props => {
	return (
		<div>
			<h1>Helllooo</h1>
			<p onClick={props.onClick}>
				My name is:{props.name} and age is:
				{props.age}
			</p>
			<input type="text" onChange={props.changed} />
		</div>
	);
};
export default person;

import React, { useEffect } from "react";
import { useStateValue } from "../contexts/StateContext";
function Test() {
	const [{ developer }, dispatch] = useStateValue();
	useEffect(() => {
		dispatch({ type: "test-case" });
	}, []);
	return (
		<div>
			<h1>All working fine</h1>
			<p>This component is just for template testing</p>
			<p>
				{`I am ${developer.fname} ${developer.lname}. My age is ${developer.age}. I am expert in `}
				{developer.stacks.map((stack, index) => {
					return (
						<span key={index}>
							{stack}
							{index < 2 ? ", " : ". "}
						</span>
					);
				})}
			</p>
			<p>↑ The above line is using useContext</p>
			<p>
				check console if it has <b>test running</b> then useReducer is also
				working fine
			</p>
		</div>
	);
}

export default Test;

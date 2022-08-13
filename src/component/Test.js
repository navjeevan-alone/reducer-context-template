import React, { useEffect } from "react";
import { useStateValue } from "../contexts/StateContext";
function Test() {
	const [{ arr, num, obj }, dispatch] = useStateValue();
	useEffect(() => {
		dispatch({ type: "test-case" });
	}, []);
	return (
		<div>
			<h1>Test</h1>
			<p>This component is just for template testing</p>
			<p>
				{`	I am ${obj[0].fname} ${obj[0].lname}My age is ${obj[0].age}. I work in  ${obj[0].company.name}`}
			</p>
		</div>
	);
}

export default Test;

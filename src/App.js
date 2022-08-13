import { useEffect } from "react";
import "./App.css";
import Test from "./component/Test";
import { useStateValue } from "./contexts/StateContext";
function App() {
	const [{ arr, num, obj }, dispatch] = useStateValue();
	useEffect(() => {
		dispatch({ type: "test-case" });
	}, []);

	return (
		<div className='App'>
			<Test />
		</div>
	);
}

export default App;

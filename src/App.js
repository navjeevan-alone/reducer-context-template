import "./css/App.css";
import Test from "./component/Test";
import Login from "./component/login";
import Signup from "./component/Signup";
import Status from "./component/Status";
import { Routes, Route, Link } from "react-router-dom";
function App() {
	return (
		<div className='App'>
			{/* <Test /> */}
			<div className='link-group'>
				<Link to='/'>Home</Link>
				<Link to='/login'>Login</Link>
				<Link to='/signup'>Signup</Link>
			</div>
			<Status />
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
			</Routes>
		</div>
	);
}

export default App;

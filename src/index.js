import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import StateProvider from "./contexts/StateContext";
import reducer, { initialState } from "./reducers/stateReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* This is Context Provider. You add as many as provider by wrapping it over StateProvider  */}
		<StateProvider reducer={reducer} initialState={initialState}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</StateProvider>
	</React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import StateProvider from "./contexts/StateContext";
import reducer, { initialState } from "./reducers/stateReducer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<StateProvider reducer={reducer} initialState={initialState}>
			<App />
		</StateProvider>
	</React.StrictMode>
);

reportWebVitals();

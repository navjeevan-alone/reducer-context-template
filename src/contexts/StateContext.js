import React, { useReducer, useContext, createContext } from "react";
// Create Data layer
export const StateContext = createContext();
// A funtion to quickly use values from context
export const useStateValue = () => {
	return useContext(StateContext);
};
//Build the Data layer and pass reducer as value
function StateProvider({ reducer, initialState, children }) {
	return (
		<StateContext.Provider value={useReducer(reducer, initialState)}>
			{children}
		</StateContext.Provider>
	);
}

export default StateProvider;

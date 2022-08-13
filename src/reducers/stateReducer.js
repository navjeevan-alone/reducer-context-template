export const initialState = {
	test: "test",
	arr: ["bread", "butter"],
	obj: [
		{
			fname: "chetan",
			lname: "alone",
			age: 18,
			company: {
				name: "Romaguera-Crona",
				catchPhrase: "Multi-layered client-server neural-net",
				bs: "harness real-time e-markets",
			},
		},
		{
			fname: "Jhon",
			lname: "doe",
			age: 20,
			company: {
				name: "Romaguera-Crona",
				catchPhrase: "Multi-layered client-server neural-net",
				bs: "harness real-time e-markets",
			},
		},
	],
	num: 159,
};
export const ACTIONS = {
	ADD: "ADD",
	REMOVE: "REMOVE",
};
export default function reducer(state, action) {
	switch (action.type) {
		case "test-case":
			console.log("test running");
			return state;
		default:
			return state;
	}
}

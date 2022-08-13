export const initialState = {
	developer: {
		fname: "Navjeevan",
		lname: "alone",
		age: 18,
		stacks: ["HTML/CSS/Js", "Bootstrap", "React"],
	},
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

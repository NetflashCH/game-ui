import { createSlice } from "@reduxjs/toolkit";
export interface initialStateTypes {
	data: {
		img: string;
		type: "tracker" | "mechanic" | "police";
		role: "recruit" | "employee";
		money: number;
		kills: number;
	}[];
}


const initialState: initialStateTypes = {
	data: [
		{
			img: 'shield',
			type: "police",
			role: "recruit",
			money: 1500,
			kills: 0,
		},

		{
			img: 'tracky',
			type: "tracker",
			role: "recruit",
			money: 1500,
			kills: 0,
		},

		{
			img: 'shield',
			type: "police",
			role: "recruit",
			money: 1500,
			kills: 0,
		},
		{
			img: 'key',
			type: "police",
			role: "recruit",
			money: 1500,
			kills: 0,
		},

		{
			img: 'tracky',
			type: "tracker",
			role: "recruit",
			money: 1500,
			kills: 0,
		},

		{
			img: 'shield',
			type: "police",
			role: "recruit",
			money: 1500,
			kills: 0,
		},
	],
};

export const dataSlice = createSlice({
	name: "missions",
	initialState,
	reducers: {
		addMission: (state, action) => {
			state.data.push(action.payload);
		},
		deleteMission: (state, action) => {
			state.data.splice(action.payload, 1);
		},
	},
});

export const { addMission, deleteMission } = dataSlice.actions;

export default dataSlice.reducer;

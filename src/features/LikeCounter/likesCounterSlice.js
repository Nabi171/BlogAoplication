import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    payloadValue: 0,


};

const likesCounterSlice = createSlice({
    name: "likesCounter",
    initialState,

    reducers: {
        incrementPayloadValue: (state) => {
            state.payloadValue = state.payloadValue + 1;
        },
        addValueToPayload: (state, action) => {
            state.payloadValue = state.payloadValue + action.payload;
        },
        incrementPayloadValueAndAddValue: (state, action) => {
            state.payloadValue = state.payloadValue + action.payload + 1;
        },
    },
});
export default likesCounterSlice.reducer;
export const { incrementPayloadValue, addValueToPayload, incrementPayloadValueAndAddValue } = likesCounterSlice.actions;
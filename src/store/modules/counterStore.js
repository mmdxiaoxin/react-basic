import { createSlice } from '@reduxjs/toolkit';

const counterStore = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
    },
    reducers: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
    },
});

const { increment, decrement } = counterStore.actions;
const reducer = counterStore.reducer;
export { increment, decrement };
export default reducer;

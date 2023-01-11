import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: [
        {id: '1', name: 'user 1'},
        {id: '2', name: 'user 2'}
    ],
    reducers: {

    }
})

export const selectAllUsers = state => state.users;
export default usersSlice.reducer;
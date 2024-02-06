import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = [
    {userId: 0, username: "", role: ""}
];

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<any>) => {
            const {userId, username, role} = action.payload;
            state[0].userId = userId;
            state[0].username = username;
            state[0].role = role;
        },
        logout: (state) => {
            state[0].userId = 0;
            state[0].username = "";
            state[0].role = "";
        }
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Result } from "@/app/models/search-result.model";

const initialState: any = [];

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        updateSearch: (state, action: PayloadAction<any>) => {
            const results: Result[] = action.payload;
            state.push(results);
        },
        clearPreviousSearch: (state) => {
            while(state.length>0) {
                state.pop();
            }
        }
    }
});

export const { updateSearch, clearPreviousSearch } = searchSlice.actions;
export default searchSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { login, getProfile } from "./authAction";

const initialState = {
    isAuthenticated: false,
    accessToken: null,
    profile: {}
}


const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(login.pending, (state, action) => {
                // TODO
                state.isAuthenticated = false
            })
            .addCase(login.fulfilled, (state, action) => {
                // TODO
                state.isAuthenticated = true
                state.accessToken = action.payload.access_token
                console.log('status ', state.isAuthenticated)
                console.log('access token ', state.accessToken)
            })
            .addCase(login.rejected, (state, action) => {
                // TODO
                state.isAuthenticated = false
                console.log('rejected ', action.error)
            })
            .addCase(getProfile.pending, (state, action) => {
                // TODO
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.profile = action.payload
                state.isAuthenticated = true
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.profile = null
            })
    }
})

export default authSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    auth: {
      user: null,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.user = serializeUser(action.payload);
    },
  },
});

function serializeUser(user) {
  if (!user) return null;
  return {
    uid: user.uid,
    email: user.email,
    emailVerified: user.emailVerified,
    displayName: user.displayName,
    // Add other necessary fields
  };
}

export const { setUser } = authSlice.actions;
export const authReducer = authSlice.reducer;

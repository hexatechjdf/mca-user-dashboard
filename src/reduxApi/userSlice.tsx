import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  token: string;
}

interface UserState {
  currentUser: User | null;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  currentUser: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
      state.isLoggedIn = true;
    },
    clearUser: (state) => {
      state.currentUser = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;

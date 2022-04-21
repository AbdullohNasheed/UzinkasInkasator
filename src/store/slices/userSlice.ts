import {LoginResponse} from '../../api/types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import{store} from'../../../App'
let initialState: LoginResponse = {
  token: '',
  user: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoggedIn: (state, action: PayloadAction<LoginResponse>) => {
      return action.payload;
    },
    userLoggedOut: () => {
      return initialState;
    },
  },
});

export const {userLoggedIn, userLoggedOut} = userSlice.actions;

export const selectUser = (state: ReturnType<typeof store.getState>) =>
  state.user;
export default userSlice.reducer;

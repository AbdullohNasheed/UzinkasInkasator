import {LoginResponse} from '../../api/types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {store} from '../../../App';

export interface RouteSlice {
  route: number;
  city: number;
  region: number;
  regionName: string;
  routeNumber: string;
}

let initialState: RouteSlice = {
  route: -1,
  city: -1,
  region: -1,
  regionName: '',
  routeNumber: '',
};

const routeSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setRoute: (state, action: PayloadAction<RouteSlice>) => {
      return action.payload;
    },
    clearRoute: () => {
      return initialState;
    },
  },
});

export const {setRoute} = routeSlice.actions;

export const selectRoute = (state: ReturnType<typeof store.getState>) =>
  state.route;
export default routeSlice.reducer;

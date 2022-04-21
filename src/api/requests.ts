import {LoginRequest, LoginResponse} from './types';
import axios from 'axios';
import {store} from '../../App';
export const url = 'https://uzinkass.travelticket.uz/api';

export const axiosInstance = axios.create({
  baseURL: url,
});
axiosInstance.interceptors.request.use(e => {
  let token = store.getState().user.token;
  if (!!token) {
    e.headers = {...e.headers, Authorization: `Bearer ${token}`};
  }
  return e;
});

export const requests = {
  auth: {
    login: (data: LoginRequest) =>
      axiosInstance.post<LoginResponse>('/login/inkass', data),
    route: () => axiosInstance.get('/findRoute?city=1&region=2&route=7'),
  },
  cities: {
    getCities: () => axiosInstance.get('/getCities'),
    getRoutes: () => axiosInstance.get('/getRoutes'),
  },
};

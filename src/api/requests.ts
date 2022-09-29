import {LoginRequest, LoginResponse, City} from './types';
import axios from 'axios';
import {store} from '../../App';
export const url = 'http://10.0.57.141/api';

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
    getFindRoute: (data: {city: number; region: number; route: number}) =>
      axiosInstance.get(
        `findRoute?city=${data.city}&region=${data.region}&route=${data.route}`,
      ),
  },
  order: {
    overvisit: (id: number) => axiosInstance.get(`/overVisit/${id}`),
    createOrder: (data: any) => axiosInstance.get(`/createOrder`, data),
    getByHash: (hash: string) =>
      axiosInstance.get(`/getOrderHash?hash=${hash}`),
    getBanks: () => axiosInstance.get('/bank/active'),
  },
};

export interface LoginRequest {
  fio: string;
  password: string;
}

export interface City {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
}

export interface Region {
  id: number;
  name: string;
  city_id: number;
  created_at: Date;
  updated_at: Date;
}

export interface User {
  id: number;
  name: string;
  position: number;
  service_area: string;
  route: string;
  created_at?: any;
  updated_at: Date;
  city_id: number;
  region_id: number;
  city: City;
  region: Region;
}

export interface LoginResponse {
  user?: User;
  token: string;
}

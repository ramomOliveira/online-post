import { AxiosResponse } from 'axios';
import api from './api';

export interface UsersProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const getUsers = (): Promise<AxiosResponse<UsersProps[]>> => {
  return api.get('/users');
};

export const getUserById = (id: number): Promise<AxiosResponse<UsersProps>> => {
  return api.get(`/users/${id}`);
};

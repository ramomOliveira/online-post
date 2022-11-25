import { AxiosResponse } from 'axios';
import api from './api';

export interface PostProps {
  id: number;
  title: string;
  body: string;
}

export interface CommentsProps {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const getPosts = (): Promise<AxiosResponse<PostProps[]>> => {
  return api.get('/posts');
};

export const getPostById = (id: number): Promise<AxiosResponse<PostProps>> => {
  return api.get(`/posts/${id}`);
};

export const getPostComments = (
  id: number
): Promise<AxiosResponse<CommentsProps[]>> => {
  return api.get(`/posts/${id}/comments`);
};

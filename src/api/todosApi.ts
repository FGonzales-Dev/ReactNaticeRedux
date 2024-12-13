// src/api/todosApi.ts
import axios from 'axios';
import {Todo} from '../types';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodosApi = async (): Promise<Todo[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

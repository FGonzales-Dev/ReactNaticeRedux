
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {TodoState} from '../../types';
import {fetchTodosApi} from '../../api/todosApi';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const todos = await fetchTodosApi();
  return todos;
});


const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};


const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, state => {
		console.log("test 1");
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
			console.log('test 2');
        state.todos = action.payload;
        state.loading = false;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
			console.log('test 3');
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default todoSlice.reducer;

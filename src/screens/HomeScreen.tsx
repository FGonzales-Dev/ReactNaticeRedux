import React, {useEffect} from 'react';
import {Button, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, AppDispatch} from '../redux/store'; 
import {fetchTodos} from '../redux/slices/todoSlice';
import TodoList from '../components/TodoList';


const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>(); 
  const {todos, loading, error} = useSelector(
    (state: RootState) => state.todos,
  );

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <SafeAreaView style={{flex: 1, padding: 20}}>
      <Button title="Fetch Todos" onPress={() => dispatch(fetchTodos())} />
      <TodoList todos={todos} loading={loading} error={error} />
    </SafeAreaView>
  );
};

export default HomeScreen;

// src/components/TodoList.tsx
import React from 'react';
import {FlatList, ActivityIndicator, Text, View} from 'react-native';
import {Todo} from '../types';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

const TodoList: React.FC<TodoListProps> = ({todos, loading, error}) => {
  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text style={{color: 'red'}}>{error}</Text>;
  }

  return (
    <FlatList
      data={todos}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => <TodoItem todo={item} />}
    />
  );
};

export default TodoList;

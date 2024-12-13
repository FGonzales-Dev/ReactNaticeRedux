// src/components/TodoItem.tsx
import React from 'react';
import {View, Text} from 'react-native';
import {Todo} from '../types';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({todo}) => (
  <View style={{marginVertical: 10}}>
    <Text style={{fontSize: 18}}>{todo.title}</Text>
    <Text>{todo.completed ? 'Completed' : 'Not Completed'}</Text>
  </View>
);

export default TodoItem;

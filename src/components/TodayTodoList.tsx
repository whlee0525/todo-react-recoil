import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { todosState } from '../states/atoms';

import TodayTodoLine from './TodayTodoLine';


const StyledWrapper = styled.div`
  margin-top: 50px;
  background-color: #9ecbd1;
  width: 100%;
  padding: 10px;
`;

export default function TodayTodoList() {
  console.log('[recoil] todos');

  const [ todos, setTodos ] = useRecoilState(todosState);

  const handleRemove = (selectedId: number) =>
    setTodos(prev => prev.filter(({ id }) => id !== selectedId));

  const handleDone = (selectedId: number) =>
    setTodos(prev =>
      prev.map(todo => (todo.id === selectedId) ? { ...todo, done: !todo.done } : todo));

  return (
    <StyledWrapper>
      {!todos.length && 'No todos'}
      {todos.map(line =>
        <TodayTodoLine
          key={line.id}
          onRemove={() => handleRemove(line.id)}
          onDone={() => handleDone(line.id)}
          {...line}
        />)}
    </StyledWrapper>
  );
}
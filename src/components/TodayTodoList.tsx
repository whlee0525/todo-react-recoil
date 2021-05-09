import React, { useContext } from 'react';
import styled from 'styled-components';

import TodayTodoLine from './TodayTodoLine';
import DataContext from '../DataContext';


const StyledWrapper = styled.div`
  margin-top: 50px;
  background-color: #9ecbd1;
  width: 100%;
  padding: 10px;
`;

export default function TodayTodoList() {
  console.log('[context] todos');

  const { todos, setTodos } = useContext(DataContext);

  // const handleClick = (selectedId) => setTodos(prev => prev.filter(({id})=> id !== selectedId));

  return (
    <StyledWrapper>
      {!todos.length && 'No todos'}
      {todos.map(line => <TodayTodoLine key={line.id} {...line} />)}
    </StyledWrapper>
  );
}
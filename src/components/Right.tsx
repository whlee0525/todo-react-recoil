import React from 'react';
import styled from 'styled-components';

import TodayTodoInput from './TodayTodoInput';
import TodayTodoList from './TodayTodoList';

const StyledRight = styled.div`
  box-sizing: border-box;
  width: 450px;
  padding: 50px;

  text-align: center;
  background-color: #92bdc9;
`;

export default function Right() {
  console.log('Right');
  return (
    <StyledRight>
      <h1>Todos</h1>
      <br/>
      <TodayTodoInput />
      <TodayTodoList />
    </StyledRight>
  );
}
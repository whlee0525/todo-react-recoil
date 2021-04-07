import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  background-color: #9ecbd1;
  border: none;
  height: 70px;
  width: 100%;
  padding: 0 10px;
  outline: none;
`;

export default function TodayTodoInput() {
  console.log('TodayTodoInput');
  return (
    <StyledInput 
        placeholder="What's my plan?"
    />
  );
}
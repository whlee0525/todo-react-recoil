import React from 'react';
import styled from 'styled-components';
import { Todo } from '../types';

interface Props extends Omit<Todo, 'id'> { };

const StyledWrapper = styled.div`
  background-color: #fbdad7;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

export default function TodayTodoLine({ content, done }: Props) {
  console.log('TodayTodoLine');
  return (
    <StyledWrapper>
      {content}
    </StyledWrapper>
  );
}
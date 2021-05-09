import React from 'react';
import styled from 'styled-components';
import { Todo } from '../types';

interface Props extends Omit<Todo, 'id'> {
  onRemove: () => void;
  onDone: () => void;
};

interface StyledProps {
  done?: boolean;
}

const StyledWrapper = styled.div<StyledProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #fbdad7;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
   background-color: #e6c6c3; 
  }

  > div {
    ${({ done }) => done && `
    text-decoration: line-through;
    color: gray;
  `}
  }
`;

const StyledButtonRemove = styled.button`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: none;
  background-color: rgba(0,0,0, 0.1);

  &:hover {
    background-color: rgba(0,0,0, 0.2);
  }
`;

export default function TodayTodoLine({ content, done, onRemove, onDone }: Props) {
  return (
    <StyledWrapper done={done} onClick={onDone}>
      <div>{content}</div>
      <StyledButtonRemove onClick={onRemove}>X</StyledButtonRemove>
    </StyledWrapper>
  );
}
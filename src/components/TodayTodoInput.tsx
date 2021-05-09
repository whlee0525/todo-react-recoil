import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import DataContext from '../DataContext';

const StyledInput = styled.input`
  background-color: #9ecbd1;
  border: none;
  height: 70px;
  width: 100%;
  padding: 0 10px;
  outline: none;
`;

const StyledButton = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 10px
`;

export default function TodayTodoInput() {
  console.log('[context] setTodos');

  const { setTodos } = useContext(DataContext);

  const [inputData, setInputData] = useState('');

  const handleClick = () => {
    const newTodo = { id: new Date().getUTCMilliseconds(), content: inputData, done: false };
    setTodos(prev => [...prev, newTodo]);
    setInputData('');
  }

  return (
    <>
      <StyledInput
        placeholder="What's my plan?"
        value={inputData}
        onChange={e => setInputData(e.target.value)}
      />
      <StyledButton onClick={handleClick} >Do!</StyledButton>
    </>
  );
}
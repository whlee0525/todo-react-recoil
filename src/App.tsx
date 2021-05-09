import React, { useState } from 'react';
import styled from 'styled-components';

import DataContext from './DataContext';
import Left from './components/Left';
import Right from './components/Right';
import Title from './components/Title';
import { Todo, Color } from './types';

const AppWrapper = styled.div`
  width: 1080px;
  min-height: 720px;
  margin-top: 100px;
  margin-right: auto;
  margin-left: auto;
  background-color: #dce0e1;

  padding: 50px 0;
  text-align: center;
`;

const MainContent = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export default function App() {
  const [color, setColor] = useState<Color>('white');
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <AppWrapper>
      <Title />
      <DataContext.Provider value={{ color, setColor, todos, setTodos }} >
        <MainContent>
          <Left />
          <Right />
        </MainContent>
      </DataContext.Provider>
    </AppWrapper>
  );
};

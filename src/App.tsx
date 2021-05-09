import React from 'react';
import styled from 'styled-components';
import {RecoilRoot} from 'recoil';

import Left from './components/Left';
import Right from './components/Right';
import Title from './components/Title';

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

  return (
    <AppWrapper>
      <Title />
      <RecoilRoot >
        <MainContent>
          <Left />
          <Right />
        </MainContent>
      </RecoilRoot>
    </AppWrapper>
  );
};

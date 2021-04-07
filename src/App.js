import styled from 'styled-components';

import Left from './components/Left';
import Right from './components/Right';

const StyledApp = styled.div`
  width: 1080px;
  min-height: 720px;
  margin-top: 100px;
  margin-right: auto;
  margin-left: auto;
  background-color: #dce0e1;

  padding: 50px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

`;

export default function App() {
  console.log('app');
  return (
    <StyledApp>
      <Left/>
      <Right />
    </StyledApp>
  );
};

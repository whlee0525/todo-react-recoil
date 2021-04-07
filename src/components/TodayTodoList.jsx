import React from 'react';
import styled from 'styled-components';

import TodayTodoLine from './TodayTodoLine';

const StyledWrapper = styled.div`
  margin-top: 50px;
  background-color: #9ecbd1;
  width: 100%;
  padding: 10px;
`;

export default function TodayTodoList() {
  console.log('TodayTodoList');

  const data = [{
    content: 'first',
    done: false,   
  },{
    content: 'second',
    done: false,   
  },{
    content: 'third',
    done: true,   
  },]

  return (
    <StyledWrapper>
        {data.map(line => <TodayTodoLine {...line}/>)}
    </StyledWrapper> 
  );
}
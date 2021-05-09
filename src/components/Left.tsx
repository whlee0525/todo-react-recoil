import React from 'react';
import styled from 'styled-components';
import TodayColorSelects from './TodayColorSelects';
import TodayColorSelected from './TodayColorSelected';

const StyledLeft = styled.div`
  box-sizing: border-box;
  width: 450px;
  padding: 50px;

  text-align: center;
  background-color: #92bdc9;
`;


export default function Left() {
    return (
        <StyledLeft>
            <h1>Feeling</h1>
            <br />
            <TodayColorSelects />
            <TodayColorSelected />
        </StyledLeft>
    );
}
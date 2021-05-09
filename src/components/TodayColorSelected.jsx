  import React, { useContext } from 'react'
  import styled from 'styled-components'

  import { DataContext } from '../DataContext';

  const StyledWrapper = styled.div`
    margin-top: 50px;
    width: 100%;
    height: 70px;
    background-color: ${({ color }) => color ? `${color};` : `white;`};
  `

  export default function TodayColorBox() {
    console.log('TodayColorBox');
    console.log('[context] color');

    const { color } = useContext(DataContext);

    return <StyledWrapper color={color}></StyledWrapper>
  };
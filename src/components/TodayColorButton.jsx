import React, { useContext } from 'react'
import styled from 'styled-components'

import { DataContext } from '../DataContext';

const StyledWrapper = styled.button`
  margin: 10px;
  width: 50px;
  height: 50px;
  background-color: ${({ color }) => color ? `${color};` : `white;`};

  border: none;
  outline: none;
  cursor: pointer;
`

export default function TodayColorBox({ color }) {
  console.log('color button -', color);
  console.log('[context] setColor');

  const { setColor } = useContext(DataContext);

  const handleClick = () => setColor(color);

  return (
    <StyledWrapper color={color} onClick={handleClick}>
      {color}
    </StyledWrapper>
  )
};
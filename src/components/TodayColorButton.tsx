import React, { useContext } from 'react';
import styled from 'styled-components';
import { Color } from '../types';
import DataContext from '../DataContext';

interface Props {
  color: Color;
}

const StyledWrapper = styled.button`
  margin: 10px;
  width: 50px;
  height: 50px;
  background-color: ${({ color }) => color ? `${color};` : `white;`};

  border: none;
  outline: none;
  cursor: pointer;
`

export default function TodayColorBox({ color }: Props) {
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
import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';

import { colorState } from '../states/atoms';
import { Color } from '../types';

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
  console.log('[recoil] setColor');

  const setColor = useSetRecoilState(colorState);

  const handleClick = () => setColor(color);

  return (
    <StyledWrapper color={color} onClick={handleClick}>
      {color}
    </StyledWrapper>
  )
};
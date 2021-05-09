import React from 'react'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil';
import { colorState } from '../states/atoms';

const StyledWrapper = styled.div`
    margin-top: 50px;
    width: 100%;
    height: 70px;
    background-color: ${({ color }) => color ? `${color};` : `white;`};
  `

export default function TodayColorBox() {
  console.log('[recoil] color');

  const color = useRecoilValue(colorState);

  return <StyledWrapper color={color}></StyledWrapper>
};
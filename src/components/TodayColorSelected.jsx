import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 70px;
  background-color: ${({ color }) => color ? `${color};` : `white;`};
`

export default function TodayColorBox() {
  console.log('TodayColorBox -');

  const color = 'red';

  return <StyledWrapper color={color}></StyledWrapper>
};
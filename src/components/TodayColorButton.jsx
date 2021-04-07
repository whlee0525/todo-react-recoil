import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.button`
  margin: 10px;
  width: 50px;
  height: 50px;
  background-color: ${({color}) => color?`${color};` : `white;`};

  border: none;
`

export default function TodayColorBox({color}) {
  console.log('color button -', color);
  return <StyledWrapper color={color}>{color}</StyledWrapper>
};
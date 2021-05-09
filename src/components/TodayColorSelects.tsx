import React from 'react'
import styled from 'styled-components'

import TodayColorButton from './TodayColorButton';

const StyledWrapper = styled.div`
  background-color: #9ecbd1;
`

const COLORS = ['red', 'orange', 'yellow'];

export default function TodayColorSelects() {
  return (
    <StyledWrapper>
      {COLORS.map(color => <TodayColorButton key={color} color={color} />)}
    </StyledWrapper>
  )
};
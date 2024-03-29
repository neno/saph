/**
 *
 * Actions
 *
 */

import React from 'react';
import styled from 'styled-components';
import { media } from '../../style-utils';


function Actions() {
  const Wrapper = styled.div`
    position: absolute;
    left: -20px;
    top: -61px;
    font-size: 0;
    
    ${media.tabletLandscape`
      left: auto;
      right: 0;
      top: -41px;
    `}
  `;

  const Button = styled.button`
    display: inline-block;
    min-width: 110px;
    height: 33px;
    margin-left: -1px;
    border: solid 1px #7c5e3b;
    font-family: 'TenorSans', sans-serif;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.5px;
    color: #7c5e3c;
    
    &:first-child {
      margin-left: 0;
    }
    
    ${media.tablet`
       min-width: 160px;
    `}
   `;

  return (
    <Wrapper>
      <Button>Show Similar</Button>
      <Button>Share</Button>
    </Wrapper>
  );
}

export default Actions;

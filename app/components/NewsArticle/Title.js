import styled from 'styled-components';
import { media } from '../../style-utils';

const Title = styled.h3`
  margin: 0 0 5px;
  font-family: 'TenorSans', sans-serif;
  font-size: 24px;
  font-weight: normal;
  text-transform: uppercase;
  line-height: 1.3;
  color: #000000;
  
  ${media.tablet`
    font-size: 30px;
  `}
`;

export default Title;

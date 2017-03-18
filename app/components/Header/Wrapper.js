import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  // justify-content: center;
  // align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 18px 0 14px 24px;
  z-index: 9000;
  height: 80px;
  width: 100%;
  background: white;
`;

export default Wrapper;

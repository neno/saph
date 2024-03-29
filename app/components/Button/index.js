import styled from 'styled-components';

const Button = styled.button`
  display: block;
  padding: 0;
  max-width: 100%;
  width: 400px;
  height: 80px;
  margin: auto;
  border: solid 1px #7c5e3b;
  font-family: 'TenorSans', sans-serif;
  font-size: 45px;
  text-align: center;
  text-transform: lowercase
  color: #7c5e3c;
  transition: all .4s ease;
  &:hover {
    background-color: #7C5E3C;
    border-color: #7C5E3C;
    color: white;
  }
`;

export default Button;

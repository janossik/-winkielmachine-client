import styled from 'styled-components';

const Button = styled.button`
  font-family: 'monospace', sans-serif;
  font-size: 24px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  border: 3px solid;
  box-shadow: 1px 1px 0 0, 2px 2px 0 0, 3px 3px 0 0, 4px 4px 0 0, 5px 5px 0 0;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 300px;
  height: 70px;
  padding: 5px 10px;
  &:active {
    box-shadow: 0 0 0 0;
    top: 5px;
    left: 5px;
  }

  @media (min-width: 768px) {
  }
`;

export default Button;

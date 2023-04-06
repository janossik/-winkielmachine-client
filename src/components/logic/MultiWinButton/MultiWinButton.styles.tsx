import styled from 'styled-components';

export const MultiWinButtonWrapper = styled.span<{ top: number; left: number }>`
  position: absolute;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  height: 20px;
  width: 20px;
  translate: 50%;
  padding: 0 3px;
  background-color: #ffd700;
  background-image: url('/win2.svg');
  background-size: cover;
  border-radius: 100px;
  cursor: pointer;
`;

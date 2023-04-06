import styled from 'styled-components';

export const WrapperBet = styled.div<{ visible: boolean; lock: boolean }>`
  display: grid;
  background-color: dimgrey;
  visibility: ${({ visible }) => (visible ? 'initial' : 'hidden')};
  grid-template-areas:
    'z a a a a a a a a a a a a a a x x'
    'c c c c c c c c c c c d d d d d d'
    'c c c c c c c c c c c d d d d d d'
    'c c c c c c c c c c c d d d d d d'
    'c c c c c c c c c c c d d d d d d'
    'c c c c c c c c c c c d d d d d d'
    'e f f f f f f f f f f f f f f b g';
  gap: 2px;
  opacity: ${({ lock }) => (lock ? '0.8' : '1')};
`;
export const Screen = styled.div`
  display: grid;
  place-items: center;
  background-color: #202f2f;
`;

import styled from 'styled-components';
import { useRoulette } from '~/hooks/useRoulette';

const WrapperBet = styled.div<{ visible: boolean; lock: boolean }>`
  display: grid;
  background-color: dimgrey;
  visibility: ${({ visible }) => (visible ? 'initial' : 'hidden')};
  grid-template-areas:
    'z a a b b'
    'c c c d d'
    'c c c d d'
    'c c c d d'
    'c c c d d'
    'c c c d d'
    'e f f g g';
  gap: 2px;
  opacity: ${({ lock }) => (lock ? '0.8' : '1')};
`;

const Screen = styled.div`
  display: grid;
  place-items: center;
  background-color: #202f2f;
`;

const Bet = ({ id, primary, secondary, visible, lock }: { id: string; primary: number; secondary: number; cost: number; lock: boolean; visible: boolean }) => {
  const {
    state: { max },
    dispatch,
  } = useRoulette();
  return (
    <WrapperBet visible={visible} lock={lock}>
      <Screen style={{ gridArea: 'z' }}>{id}</Screen>
      <button style={{ gridArea: 'a' }} disabled={lock} onClick={() => dispatch({ type: 'reset', id })}>
        Reset
      </button>
      <button style={{ gridArea: 'b' }} disabled={lock} onClick={() => dispatch({ type: 'add-secondary', id })}>
        +1
      </button>
      <Screen
        style={{
          gridArea: 'c',
          fontSize: '24px',
          background: primary === Number(max) ? 'red' : primary > 1 && secondary === 1 ? 'green' : undefined,
        }}
      >
        {primary}
      </Screen>
      <Screen style={{ gridArea: 'd', fontSize: '24px' }}>{secondary}</Screen>
      <button
        style={{ gridArea: 'e' }}
        disabled={lock}
        onClick={() => {
          dispatch({ type: 'add-primary', id });
        }}
      >
        +1c
      </button>
      <button style={{ gridArea: 'f' }} onClick={() => dispatch({ type: 'lock', id })}>
        {lock ? 'Unlock' : 'Lock'}
      </button>
      <button style={{ gridArea: 'g' }} disabled={lock} onClick={() => dispatch({ type: 'sub-secondary', id })}>
        -1
      </button>
    </WrapperBet>
  );
};

export default Bet;

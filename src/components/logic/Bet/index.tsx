import { index } from '~/hooks/useRoulette';
import { rules } from '~/utils/rules';
import { getCost } from '~/helpers/roulette';
import { Screen, WrapperBet } from '~/components/logic/Bet/Bet.styles';

const Bet = ({ id, primary, secondary, visible, lock }: { id: string; primary: number; secondary: number; lock: boolean; visible: boolean }) => {
  const {
    state: { max },
    dispatch,
  } = index();

  return (
    <WrapperBet visible={visible} lock={lock}>
      <Screen style={{ gridArea: 'z' }}>{rules[`${secondary === 1 ? primary - 1 || 1 : primary}`].cost}</Screen>
      <span
        style={{
          gridArea: 'a',
          background: 'url(/win.svg), #fff',
          backgroundSize: 'auto 70%',
          backgroundPosition: '50%',
          backgroundRepeat: 'no-repeat',
          cursor: 'pointer',
          pointerEvents: lock ? 'none' : 'auto',
        }}
        onClick={() => dispatch({ type: 'win', id })}
      ></span>
      <span
        style={{
          gridArea: 'x',
          background: 'url(/reset.svg), #fff',
          backgroundSize: 'auto 70%',
          backgroundPosition: '50%',
          backgroundRepeat: 'no-repeat',
          cursor: 'pointer',
          pointerEvents: lock ? 'none' : 'auto',
        }}
        onClick={() => dispatch({ type: 'reset', id })}
      />
      <button style={{ gridArea: 'b', backgroundColor: '#fff', border: 'none' }} disabled={lock} onClick={() => dispatch({ type: 'add-secondary', id })}>
        +
      </button>
      <Screen
        style={{
          gridArea: 'c',
          fontSize: '24px',
          background: primary === Number(max) ? 'red' : primary > 1 && secondary === 1 ? 'green' : undefined,
        }}
      >
        {getCost(primary)}
      </Screen>
      <Screen style={{ gridArea: 'd', fontSize: '24px' }}>{secondary}</Screen>
      <button
        style={{ gridArea: 'e', backgroundColor: '#fff', border: 'none' }}
        disabled={lock}
        onClick={() => {
          dispatch({ type: 'add-primary', id });
        }}
      >
        +1c
      </button>
      <span
        style={{
          gridArea: 'f',
          backgroundImage: lock ? `url(/lock.svg)` : `url(/unlock.svg)`,
          backgroundSize: '60% 70%',
          backgroundPosition: '50%',
          backgroundRepeat: 'no-repeat',
          cursor: 'pointer',
        }}
        onClick={() => dispatch({ type: 'lock', id })}
      />
      <button style={{ gridArea: 'g', backgroundColor: '#fff', border: 'none' }} disabled={lock} onClick={() => dispatch({ type: 'sub-secondary', id })}>
        -
      </button>
    </WrapperBet>
  );
};

export default Bet;

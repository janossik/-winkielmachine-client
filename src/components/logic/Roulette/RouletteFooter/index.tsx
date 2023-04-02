import { useRoulette } from '~/hooks/useRoulette';
import Button from '~/components/ui/Button';

const RouletteFooter = () => {
  const {
    state: { bets },
    dispatch,
  } = useRoulette();
  return (
    <div>
      <hr />
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button
          style={{
            fontSize: '24px',
            textTransform: 'uppercase',
            fontFamily: 'monospace',
            padding: '5px 10px',
          }}
          onClick={() => dispatch({ type: 'reset-global' })}
        >
          Global Reset
        </Button>
        <Button
          style={{
            fontSize: '24px',
            textTransform: 'uppercase',
            fontFamily: 'monospace',
            padding: '5px 10px',
          }}
          onClick={() => {
            bets.forEach(({ id, lock }) => {
              !lock && dispatch({ type: 'add-secondary', id: id });
            });
          }}
        >
          Global add
        </Button>
      </div>
    </div>
  );
};

export default RouletteFooter;

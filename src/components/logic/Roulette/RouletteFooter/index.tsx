import { useRoulette } from '~/hooks/useRoulette';
import Button from '~/components/ui/Button';

const RouletteFooter = () => {
  const {
    state: { bets },
    dispatch,
  } = useRoulette();
  return (
    <>
      <hr style={{ width: '1800px' }} />

      <div style={{ display: 'flex', margin: '0 auto', gap: '10px', width: '1800px' }}>
        <div style={{ display: 'flex' }}>
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
        <div style={{ display: 'flex', marginLeft: 'auto', gap: '10px' }}>
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
    </>
  );
};

export default RouletteFooter;

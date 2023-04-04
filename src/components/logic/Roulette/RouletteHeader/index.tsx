import { useRoulette } from '~/hooks/useRoulette';
import Input from '~/components/ui/Input';
import ScoreBoard from '~/components/ui/ScoreBoard';

const RouletteHeader = () => {
  const {
    state: { max, value },
    dispatch,
  } = useRoulette();
  return (
    <div>
      <div style={{ display: 'flex', padding: '5px 0', gap: '10px' }}>
        <ScoreBoard>{value / 10} pln</ScoreBoard>
        <Input label="Maksymalna stawka" type="number" min="1" max="36" value={max} onChange={({ target }) => dispatch({ type: 'max', max: target.value })} />
      </div>
      <hr />
    </div>
  );
};

export default RouletteHeader;

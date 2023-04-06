import { index } from '~/hooks/useRoulette';
import Input from '~/components/ui/Input';
import ScoreBoard from '~/components/ui/ScoreBoard';
import Separator from '~/components/ui/Separator';
import { rules } from '~/utils/rules';
import { getCost } from '~/helpers/roulette';
import { RouletteHeaderWrapper } from '~/components/logic/Roulette/RouletteHeader/RouletteHeader.styles';

const RouletteHeader = () => {
  const {
    state: { max, value },
    dispatch,
  } = index();
  return (
    <>
      <RouletteHeaderWrapper>
        <ScoreBoard>{value / 10} pln</ScoreBoard>
        <Input
          label={`Max round(${Math.max(...Object.keys(rules).map((v) => Number(v)))})`}
          suffixLabel={` ${getCost(max) / 10} pln`}
          type="number"
          min="1"
          max={Math.max(...Object.keys(rules).map((v) => Number(v)))}
          value={max}
          onChange={({ target }) => dispatch({ type: 'max', max: target.value })}
        />
      </RouletteHeaderWrapper>
      <Separator />
    </>
  );
};

export default RouletteHeader;

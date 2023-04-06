import { index } from '~/hooks/useRoulette';
import Bet from '~/components/logic/Bet';
import MultiWinButton from '~/components/logic/MultiWinButton';
import { RouletteAreaWrapper } from '~/components/logic/Roulette/RouletteArea/RouletteArea.styles';

const RouletteArea = () => {
  const { state } = index();
  return (
    <>
      <RouletteAreaWrapper>
        {state.bets
          .sort((a, b) => (a.order > b.order ? 1 : -1))
          .map((bet) => {
            return <Bet key={bet.id} {...bet} />;
          })}
        {/* Left site */}
        <MultiWinButton ids={['6', '5']} top={215} left={75} />
        <MultiWinButton ids={['6', '9', '5', '8']} top={215} left={175} />
        <MultiWinButton ids={['5', '8']} top={350} left={175} />
        <MultiWinButton ids={['6', '9']} top={90} left={175} />
        <MultiWinButton ids={['12', '9', '11', '8']} top={215} left={343} />
        <MultiWinButton ids={['11', '8']} top={350} left={343} />
        <MultiWinButton ids={['12', '9']} top={90} left={343} />
        <MultiWinButton ids={['12', '15', '11', '14']} top={215} left={510} />
        <MultiWinButton ids={['11', '14']} top={350} left={510} />
        <MultiWinButton ids={['12', '15']} top={90} left={510} />
        <MultiWinButton ids={['18', '15', '17', '14']} top={215} left={680} />
        <MultiWinButton ids={['18', '15']} top={90} left={680} />
        <MultiWinButton ids={['17', '14']} top={350} left={680} />
        <MultiWinButton ids={['18', '17']} top={215} left={765} />
        {/* Right site */}
        <MultiWinButton ids={['24', '23']} top={215} left={995} />
        <MultiWinButton ids={['24', '27', '23', '26']} top={215} left={1079} />
        <MultiWinButton ids={['23', '26']} top={350} left={1079} />
        <MultiWinButton ids={['24', '27']} top={90} left={1079} />
        <MultiWinButton ids={['30', '27', '29', '26']} top={215} left={1248} />
        <MultiWinButton ids={['29', '26']} top={350} left={1248} />
        <MultiWinButton ids={['30', '27']} top={90} left={1248} />
        <MultiWinButton ids={['30', '33', '29', '32']} top={215} left={1412} />
        <MultiWinButton ids={['29', '32']} top={350} left={1412} />
        <MultiWinButton ids={['30', '33']} top={90} left={1412} />
        <MultiWinButton ids={['36', '33', '35', '32']} top={215} left={1581} />
        <MultiWinButton ids={['36', '33']} top={90} left={1581} />
        <MultiWinButton ids={['35', '32']} top={350} left={1581} />
        <MultiWinButton ids={['36', '35']} top={215} left={1680} />
      </RouletteAreaWrapper>
    </>
  );
};
export default RouletteArea;

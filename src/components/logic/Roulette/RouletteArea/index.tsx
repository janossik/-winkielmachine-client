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
        <MultiWinButton ids={['6', '5']} top={267} left={100} />
        <MultiWinButton ids={['6', '9', '5', '8']} top={267} left={200} />
        <MultiWinButton ids={['5', '8']} top={400} left={200} />
        <MultiWinButton ids={['6', '9']} top={155} left={200} />
        <MultiWinButton ids={['12', '9', '11', '8']} top={267} left={368} />
        <MultiWinButton ids={['11', '8']} top={400} left={368} />
        <MultiWinButton ids={['12', '9']} top={155} left={368} />
        <MultiWinButton ids={['12', '15', '11', '14']} top={267} left={535} />
        <MultiWinButton ids={['11', '14']} top={400} left={535} />
        <MultiWinButton ids={['12', '15']} top={155} left={535} />
        <MultiWinButton ids={['18', '15', '17', '14']} top={267} left={698} />
        <MultiWinButton ids={['18', '15']} top={155} left={698} />
        <MultiWinButton ids={['17', '14']} top={400} left={698} />
        <MultiWinButton ids={['18', '17']} top={267} left={790} />
        {/* Right site */}
        <MultiWinButton ids={['24', '23']} top={267} left={120 + 900} />
        <MultiWinButton ids={['24', '27', '23', '26']} top={267} left={204 + 900} />
        <MultiWinButton ids={['23', '26']} top={400} left={204 + 900} />
        <MultiWinButton ids={['24', '27']} top={155} left={204 + 900} />
        <MultiWinButton ids={['30', '27', '29', '26']} top={267} left={368 + 905} />
        <MultiWinButton ids={['29', '26']} top={400} left={368 + 905} />
        <MultiWinButton ids={['30', '27']} top={155} left={368 + 905} />
        <MultiWinButton ids={['30', '33', '29', '32']} top={267} left={532 + 905} />
        <MultiWinButton ids={['29', '32']} top={400} left={532 + 905} />
        <MultiWinButton ids={['30', '33']} top={155} left={532 + 905} />
        <MultiWinButton ids={['36', '33', '35', '32']} top={267} left={698 + 908} />
        <MultiWinButton ids={['36', '33']} top={155} left={698 + 908} />
        <MultiWinButton ids={['35', '32']} top={400} left={698 + 908} />
        <MultiWinButton ids={['36', '35']} top={267} left={785 + 920} />
      </RouletteAreaWrapper>
    </>
  );
};
export default RouletteArea;

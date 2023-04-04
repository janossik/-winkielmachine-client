import styled from 'styled-components';
import { useRoulette } from '~/hooks/useRoulette';
import Bet from '~/components/logic/Bet';

const WrapperRouletteArea = styled.div`
  display: grid;
  height: 450px;
  width: 1800px;
  margin: 10px auto;
  padding: 40px 45px;
  background-image: url('/background_area_3.svg');
  grid-template-columns: repeat(5, 1fr) 60px repeat(5, 1fr);
  gap: 20px;
`;

const MultiResetButton = (props: { ids: string[]; top: number; left: number }) => {
  const { dispatch } = useRoulette();
  return (
    <button
      style={{ position: 'absolute', top: `${props.top}px`, left: `${props.left}px`, transform: 'translate(50%,50%)', padding: '0 3px' }}
      onClick={() => {
        props.ids.forEach((id) => dispatch({ id, type: 'reset' }));
      }}
    >
      R
    </button>
  );
};

const RouletteArea = () => {
  const { state } = useRoulette();
  return (
    <>
      <WrapperRouletteArea>
        {state.bets
          .sort((a, b) => (a.order > b.order ? 1 : -1))
          .map((bet) => {
            return <Bet key={bet.id} {...bet} />;
          })}
      </WrapperRouletteArea>
      <MultiResetButton ids={['6', '5']} top={257} left={120} />
      <MultiResetButton ids={['6', '9', '5', '8']} top={257} left={204} />
      <MultiResetButton ids={['5', '8']} top={360} left={204} />
      <MultiResetButton ids={['6', '9']} top={155} left={204} />
      <MultiResetButton ids={['12', '9', '11', '8']} top={257} left={368} />
      <MultiResetButton ids={['11', '8']} top={360} left={368} />
      <MultiResetButton ids={['12', '9']} top={155} left={368} />
      <MultiResetButton ids={['12', '15', '11', '14']} top={257} left={532} />
      <MultiResetButton ids={['11', '14']} top={360} left={532} />
      <MultiResetButton ids={['12', '15']} top={155} left={532} />
      <MultiResetButton ids={['18', '15', '17', '14']} top={257} left={698} />
      <MultiResetButton ids={['18', '15']} top={360} left={698} />
      <MultiResetButton ids={['17', '14']} top={155} left={698} />
      <MultiResetButton ids={['18', '17']} top={257} left={785} />
      {/*---*/}
      <MultiResetButton ids={['24', '23']} top={257} left={120 + 905} />
      <MultiResetButton ids={['24', '27', '23', '26']} top={257} left={204 + 905} />
      <MultiResetButton ids={['23', '26']} top={360} left={204 + 905} />
      <MultiResetButton ids={['24', '27']} top={155} left={204 + 905} />
      <MultiResetButton ids={['30', '27', '29', '26']} top={257} left={368 + 905} />
      <MultiResetButton ids={['29', '26']} top={360} left={368 + 905} />
      <MultiResetButton ids={['30', '27']} top={155} left={368 + 905} />
      <MultiResetButton ids={['30', '33', '29', '32']} top={257} left={532 + 905} />
      <MultiResetButton ids={['29', '32']} top={360} left={532 + 905} />
      <MultiResetButton ids={['30', '33']} top={155} left={532 + 905} />
      <MultiResetButton ids={['36', '33', '35', '32']} top={257} left={698 + 905} />
      <MultiResetButton ids={['36', '33']} top={360} left={698 + 905} />
      <MultiResetButton ids={['35', '32']} top={155} left={698 + 905} />
      <MultiResetButton ids={['36', '35']} top={257} left={785 + 905} />
    </>
  );
};
export default RouletteArea;

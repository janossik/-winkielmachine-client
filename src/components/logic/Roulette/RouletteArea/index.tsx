import styled from 'styled-components';
import { useRoulette } from '~/hooks/useRoulette';
import Bet from '~/components/logic/Bet';

const WrapperRouletteArea = styled.div`
  display: grid;
  height: 450px;
  width: 1800px;
  margin: 10px auto;
  padding: 40px 60px;
  background-image: url('/background_area_3.svg');
  grid-template-columns: repeat(5, 1fr) 60px repeat(5, 1fr);
  gap: 30px;
`;

const RouletteArea = () => {
  const { state } = useRoulette();
  return (
    <WrapperRouletteArea>
      {state.bets
        .sort((a, b) => (a.order > b.order ? 1 : -1))
        .map((bet) => {
          return <Bet key={bet.id} {...bet} />;
        })}
    </WrapperRouletteArea>
  );
};
export default RouletteArea;

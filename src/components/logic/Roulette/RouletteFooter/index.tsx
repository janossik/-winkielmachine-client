import { index } from '~/hooks/useRoulette';
import Button from '~/components/ui/Button';
import { useState } from 'react';
import Separator from '~/components/ui/Separator';
import { RouletteFooterButtonsWrapper, RouletteFooterMainButtonsWrapper } from '~/components/logic/Roulette/RouletteFooter/RouletteFooter.styles';

const RouletteFooter = () => {
  const {
    state: { bets },
    dispatch,
  } = index();
  const [activeLeftMargin, setActiveLeftMargin] = useState(false);
  return (
    <>
      <Separator />
      <RouletteFooterButtonsWrapper>
        <RouletteFooterMainButtonsWrapper activeLeftMargin={activeLeftMargin}>
          <Button onClick={() => dispatch({ type: 'reset-global' })}>Global Reset</Button>
          <Button onClick={() => bets.forEach(({ id, lock }) => !lock && dispatch({ type: 'add-secondary', id: id }))}>Global add</Button>
        </RouletteFooterMainButtonsWrapper>
      </RouletteFooterButtonsWrapper>
      <RouletteFooterButtonsWrapper>
        <Button onClick={() => setActiveLeftMargin((v) => !v)}>Switch to {activeLeftMargin ? 'right' : 'left'}</Button>
        <Button onClick={() => dispatch({ type: 'unlock-all' })}>Unlock</Button>
      </RouletteFooterButtonsWrapper>
    </>
  );
};

export default RouletteFooter;

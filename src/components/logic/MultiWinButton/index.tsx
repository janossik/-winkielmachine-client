import { index } from '~/hooks/useRoulette';
import { MultiWinButtonWrapper } from '~/components/logic/MultiWinButton/MultiWinButton.styles';

const MultiWinButton = ({ ids, ...rest }: { ids: string[]; top: number; left: number }) => {
  const { dispatch } = index();
  return <MultiWinButtonWrapper onClick={() => ids.forEach((id) => dispatch({ id, type: 'win' }))} {...rest} />;
};

export default MultiWinButton;

import styled from 'styled-components';

export const RouletteFooterButtonsWrapper = styled.div`
  display: flex;
  width: 1800px;
  margin: 20px auto;
  gap: 10px;
`;
export const RouletteFooterMainButtonsWrapper = styled.div<{ activeLeftMargin: boolean }>`
  display: flex;
  margin-left: ${({ activeLeftMargin }) => (activeLeftMargin ? 'auto' : 'unset')};
  gap: 10px;
`;

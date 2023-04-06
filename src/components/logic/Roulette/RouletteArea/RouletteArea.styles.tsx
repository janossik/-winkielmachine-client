import styled from 'styled-components';

export const RouletteAreaWrapper = styled.div`
  display: grid;
  height: 450px;
  width: 1800px;
  margin: 10px auto;
  padding: 40px 45px;
  background-image: url('/background_area_3.svg');
  grid-template-columns: repeat(5, 1fr) 35px repeat(5, 1fr);
  gap: 30px;
`;

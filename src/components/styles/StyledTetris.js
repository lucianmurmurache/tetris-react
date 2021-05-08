import styled from 'styled-components';
import bgImage from '../../img/bg.png';

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: url(${bgImage}) #000;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const StyledTetris = styled.div`
  display: flex;
  padding: 20px;
  margin: 0 auto;
  max-width: 900px;
  align-items: flex-start;
  aside {
    width: 100%;
    max-width: 205px;
    display: block;
    padding: 0 20px;
  }
`;

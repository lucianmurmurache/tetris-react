import styled from 'styled-components';

export const StyledDisplay = styled.div`

width: 100%;
display: flex;
padding: 20px;
background: #000;
min-height: 30px;
font-size: 0.8rem;
margin: 0 0 20px 0;
align-items: center; 
border-radius: 20px;
box-sizing: border-box;
border: 4px solid #333;
font-family: Pixel, Arial, Helvetica, sans-serif;
color: ${props => (props.gameOver ? '#FF0000' : '#999')};

`;
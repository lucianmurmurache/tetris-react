import styled from 'styled-components';

export const StyledStage = styled.div`
    grid-template-rows: repeat(
        ${props => props.height},
        calc(25vw / ${props => props.width})
        );
    display: grid;
    width: 100%;
    grid-gap: 1px;
    max-width 25vw;
    background: #111;
    border: 4px solid #333;
    grid-template-columns: repeat(${props => props.width}, 1fr);
`;

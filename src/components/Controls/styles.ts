import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  margin: auto;
  gap: 5px;
  justify-self: center;
  padding: 10px;
  width: 240px;

  .grid-item {
    align-self: end;
  }

  .item-left {
    grid-column: 1;
    grid-row: 1 / span 2;
  }

  .item-right {
    grid-column: 3;
    grid-row: 1 / span 2;
  }
`;

export const ArrowButton = styled.button` 
  display: block;
  background-color: ${(props: { color: string }) =>
    props.color ? props.color : '#ffffff90'};
  border: 1px solid #ffffff30;
  color: #333333;
  padding: 8px 10px;
  font-size: 14px;
  border-radius: 6px;
  text-align: center;
  align-self: end;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
  width: 70px;
}

&:disabled{
  background-color: #ffffff10;
  color: #ffffff70;
  border: 1px solid #00000030;
}

&:hover:enabled {
  border: 1px solid #ffffff50;
  color: #33333390;
}

&:active {
  background-color: ${(props: { color: string }) => props.color}90}
  box-shadow: 0.5px 1px 2px rgba(0, 0, 0, 0.3);
}

`;

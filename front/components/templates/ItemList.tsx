import styled from 'styled-components';

export const ItemList = () => {
  return (
    <ItemListWrapper>
      <ul>
        <li>Best Time To Buy and Sell Stock</li>
        <li>Best Time To Buy and Sell Stock</li>
      </ul>
    </ItemListWrapper>
  );
};

const ItemListWrapper = styled.section`
  padding: 30px 50px;
  min-height: 200px;
`;

import styled from 'styled-components';

interface ItemListProps {
  todoItems: {
    created_at: string;
    description: string;
    status: string;
  }[];
  isLoading: boolean;
}

export const ItemList: React.FC<ItemListProps> = ({ todoItems, isLoading }) => {
  console.log(todoItems);
  return (
    <ItemListWrapper>
      <ul>
        {!isLoading && todoItems.map((item) => <li>{item.description}</li>)}
      </ul>
    </ItemListWrapper>
  );
};

const ItemListWrapper = styled.div`
  padding: 30px 50px;
  min-height: 200px;
`;

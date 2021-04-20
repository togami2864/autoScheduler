import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Divider } from '@chakra-ui/react';
import { DaysPicker } from '../components/organisms/DaysPicker';
import { ItemList } from '../components/templates/ItemList';
import { Button } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <DaysPicker />
      <ReviewSection>
        <Heading>今日の復習</Heading>
        <Divider />
        <ItemList />
      </ReviewSection>
      <DoneSection>
        <Heading>
          <h1>やったこと</h1>
          <Button
            onClick={() => router.push('/register')}
            leftIcon={<EditIcon />}
            colorScheme="teal"
            variant="solid"
          >
            アイテムを登録
          </Button>
        </Heading>
        <Divider />
        <ItemList />
      </DoneSection>
    </>
  );
}

const Heading = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 32px;
  padding-bottom: 10px;
`;

const ReviewSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const DoneSection = styled.section`
  display: flex;
  flex-direction: column;
`;

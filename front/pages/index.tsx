import Head from 'next/head';
import styled from 'styled-components';
import { Divider } from '@chakra-ui/react';
import { DaysPicker } from '../components/organisms/DaysPicker';
import { ItemList } from '../components/templates/ItemList';
import { IconButton } from '../components/molecules/IconButton';

export default function Home() {
  return (
    <>
      <DaysPicker />
      <ReviewSection>
        <Heading>今日の復習</Heading>
        <Divider />
        <ItemList />
      </ReviewSection>
      <DoneSection>
        <Heading>やったこと</Heading>
        <Divider />
        <ItemList />
        <IconButton />
      </DoneSection>
    </>
  );
}

const Heading = styled.h1`
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

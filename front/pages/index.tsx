import Head from 'next/head';
import styled from 'styled-components';
import { Divider } from '@chakra-ui/react';
import { DaysPicker } from '../components/organisms/DaysPicker';
import { ItemList } from '../components/templates/ItemList';

export default function Home() {
  return (
    <>
      <DaysPicker />
      <Heading>今日の復習</Heading>
      <Divider />
      <ItemList />
      <Heading>やったこと</Heading>
      <Divider />
    </>
  );
}

const Heading = styled.h1`
  font-weight: 600;
  font-size: 32px;
  padding-bottom: 10px;
`;

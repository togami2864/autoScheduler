import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { dateState } from '../states/dataState';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Divider } from '@chakra-ui/react';
import { DaysPicker } from '../components/organisms/DaysPicker';
import { ItemList } from '../components/templates/ItemList';
import { Button } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

import { db } from '../firebase/clientApp';
import 'firebase/firestore';

import format from 'date-fns/format';
import add from 'date-fns/add';

type docData = {
  key: string;
  created_at: string;
  description: string;
  status: string;
}[];

export default function Home() {
  const router = useRouter();
  const day = useRecoilValue(dateState);
  const today = format(day, 'yyyy_MM_dd');
  const yesterday = format(add(day, { days: -1 }), 'yyyy_MM_dd');

  const [todayLearned, setTodayLearned] = useState<docData>([
    {
      key: 'initial_yest',
      created_at: today,
      description: 'initial',
      status: 'bad',
    },
  ]);
  const [yestLearned, setYestLearned] = useState<docData>([
    {
      key: 'initial_today',
      created_at: today,
      description: 'There is no data',
      status: 'bad',
    },
  ]);

  const [todayIsLoading, setTodayIsLoading] = useState(true);
  const [yestIsLoading, setYestIsLoading] = useState(true);

  const todayRef = db.collection('todos').doc(today);
  const yestRef = db.collection('todos').doc(yesterday);

  useEffect(() => {
    const getToday = async () => {
      await todayRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            setTodayLearned(doc.data().items);
          } else {
            setTodayLearned([
              {
                key: 'no_data_today',
                created_at: today,
                description: 'There is no data',
                status: 'bad',
              },
            ]);
          }
        })
        .finally(() => {
          setTodayIsLoading(false);
        });
    };

    getToday();
  }, [day, router.pathname]);

  useEffect(() => {
    const getYest = async () => {
      await yestRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            setYestLearned(doc.data().items);
          } else {
            setYestLearned([
              {
                key: 'no_data_yest',
                created_at: today,
                description: 'There is no data',
                status: 'bad',
              },
            ]);
          }
        })
        .finally(() => {
          setYestIsLoading(false);
        });
    };
    getYest();
  }, [day, router.pathname]);

  return (
    <>
      <DaysPicker />
      <ReviewSection>
        <Heading>今日の復習</Heading>
        <Divider />
        <ItemList todoItems={yestLearned} isLoading={yestIsLoading} />
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
        <ItemList todoItems={todayLearned} isLoading={todayIsLoading} />
      </DoneSection>
    </>
  );
}

const Heading = styled.div`
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

import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { dateState } from '../states/dataState';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { ItemBox } from '../components/organisms/ItemBox';
import { Button } from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { Stack } from '@chakra-ui/react';
import { nanoid } from 'nanoid';

import { getJSTDate } from '../lib/getJSTDate';
import format from 'date-fns/format';
import add from 'date-fns/add';

import { db } from '../firebase/clientApp';
import firebase from 'firebase/app';
import 'firebase/firestore';

export default function Register() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('bad');
  const day = useRecoilValue(dateState);
  const dateId = format(day, 'yyyy_MM_dd');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const created_at = getJSTDate(new Date());
    if (selectValue === 'bad') {
      const oneDayLater = format(add(day, { days: 1 }), 'yyyy_MM_dd');
      const oneWeekLater = format(add(day, { weeks: 1 }), 'yyyy_MM_dd');
      const oneMonthLater = format(add(day, { months: 1 }), 'yyyy_MM_dd');
      const fiveMonthLater = format(add(day, { months: 5 }), 'yyyy_MM_dd');
      const days = [
        dateId,
        oneDayLater,
        oneWeekLater,
        oneMonthLater,
        fiveMonthLater,
      ];
      for (const day of days) {
        const itemRef = db.collection('todos').doc(day);
        const uniqueKey = nanoid();
        db.runTransaction((transaction) => {
          return transaction.get(itemRef).then(async (doc) => {
            if (!doc.exists) {
              await transaction.set(itemRef, {
                items: [
                  {
                    key: uniqueKey,
                    description: inputValue,
                    created_at: created_at,
                    status: selectValue,
                  },
                ],
                updated: created_at,
              });
            } else {
              await transaction.update(itemRef, {
                items: firebase.firestore.FieldValue.arrayUnion({
                  key: uniqueKey,
                  description: inputValue,
                  created_at: created_at,
                  status: selectValue,
                }),
                updated: created_at,
              });
            }
          });
        });
      }
    } else {
      const oneMonthLater = format(add(day, { months: 1 }), 'yyyy_MM_dd');
      const days = [dateId, oneMonthLater];
      for (const day of days) {
        const itemRef = db.collection('todos').doc(day);
        const uniqueKey = nanoid();
        db.runTransaction((transaction) => {
          return transaction.get(itemRef).then(async (doc) => {
            if (!doc.exists) {
              await transaction.set(itemRef, {
                items: [
                  {
                    key: uniqueKey,
                    description: inputValue,
                    created_at: created_at,
                    status: selectValue,
                  },
                ],
                updated: created_at,
              });
            } else {
              await transaction.update(itemRef, {
                items: firebase.firestore.FieldValue.arrayUnion({
                  key: uniqueKey,
                  description: inputValue,
                  created_at: created_at,
                  status: selectValue,
                }),
                updated: created_at,
              });
            }
          });
        });
      }
    }
    setInputValue('');
    router.push('/');
  };

  const handleDiscard = () => {
    if (inputValue !== '') {
      const result = window.confirm('破棄して良いですか？');
      if (result) {
        setInputValue('');
        router.push('/');
      } else {
        return;
      }
    }
    router.push('/');
  };
  return (
    <RegisterWrapper onSubmit={handleSubmit}>
      <ItemBox
        inputValue={inputValue}
        selectValue={selectValue}
        setInputValue={(e) => {
          e.preventDefault();
          setInputValue(e.target.value);
        }}
        setSelectValue={(e) => {
          e.preventDefault();
          setSelectValue(e.target.value);
        }}
      />
      <Stack spacing={4} direction="column" align="center">
        <Button
          type="submit"
          leftIcon={<AddIcon />}
          colorScheme="teal"
          variant="solid"
        >
          追加
        </Button>
        <Button
          onClick={handleDiscard}
          leftIcon={<DeleteIcon />}
          colorScheme="red"
          variant="solid"
        >
          戻る
        </Button>
      </Stack>
    </RegisterWrapper>
  );
}

const RegisterWrapper = styled.form``;

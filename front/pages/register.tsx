import { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { ItemBox } from '../components/organisms/ItemBox';
import { Button } from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { Stack } from '@chakra-ui/react';

import { writeNewItemData } from '../lib/writeItemData';
import format from 'date-fns/format';

export default function Register() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');
  const [inputSelectValue, setSelectValue] = useState('');
  const handleSubmit = async () => {
    await writeNewItemData(
      format(new Date(), 'yyyy/MM/dd'),
      inputValue,
      inputSelectValue,
    )
      .then(() => {
        console.log('sucess');
      })
      .catch((e) => {
        console.error(e);
      });
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
        selectValue={inputSelectValue}
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

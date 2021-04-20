import { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { ItemBox } from '../components/organisms/ItemBox';
import { Button } from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { Stack } from '@chakra-ui/react';
export default function Register() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');
  const [inputSelectValue, setSelectValue] = useState('');
  const handleSubmit = () => {
    console.log('success!');
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
        selectValue={inputSelectValue}
        setInputValue={(e) => setInputValue(e.target.value)}
        setSelectValue={(e) => setSelectValue(e.target.value)}
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

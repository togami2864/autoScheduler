import styled from 'styled-components';
import { ItemBox } from '../components/organisms/ItemBox';
import { Button } from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { Stack } from '@chakra-ui/react';
export default function Register() {
  return (
    <>
      <ItemBox />
      <Stack spacing={4} direction="column" align="center">
        <Button leftIcon={<AddIcon />} colorScheme="teal" variant="solid">
          追加
        </Button>
        <Button leftIcon={<DeleteIcon />} colorScheme="red" variant="solid">
          戻る
        </Button>
      </Stack>
    </>
  );
}

const RegisterWrapper = styled.section``;

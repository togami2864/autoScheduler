import React from 'react';
import styled from 'styled-components';
import { Button } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

const IconMap = {
  Edit: <EditIcon />,
};
export const IconButton = () => {
  return (
    <ButtonWrapper>
      <Button leftIcon={<EditIcon />} colorScheme="teal" variant="solid">
        アイテムを登録
      </Button>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  // margin: 0 auto;
`;

import React from 'react';
import styled from 'styled-components';
import { Select, Input } from '@chakra-ui/react';

export const ItemBox: React.FC = () => {
  return (
    <ItemBoxWrapper>
      <Input placeholder="今日勉強したことを入力してください" />
      <Select>
        <option value="bad">完全に理解した()</option>
        <option value="good">ﾁｮｯﾄﾃﾞｷﾙ</option>
      </Select>
    </ItemBoxWrapper>
  );
};

const ItemBoxWrapper = styled.div`
  display: flex;
`;

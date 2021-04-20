import React from 'react';
import styled from 'styled-components';
import { Select, Input } from '@chakra-ui/react';

interface ItemBoxProps {
  inputValue: string;
  setInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectValue: string;
  setSelectValue: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const ItemBox: React.FC<ItemBoxProps> = ({
  inputValue,
  setInputValue,
  selectValue,
  setSelectValue,
}) => {
  return (
    <ItemBoxWrapper>
      <Input
        value={inputValue}
        onChange={setInputValue}
        placeholder="今日勉強したことを入力してください"
      />
      <Select value={selectValue} onChange={setSelectValue}>
        <option value="bad">完全に理解した()</option>
        <option value="good">ﾁｮｯﾄﾃﾞｷﾙ</option>
      </Select>
    </ItemBoxWrapper>
  );
};

const ItemBoxWrapper = styled.div`
  display: flex;
  margin: 20px 0;
`;

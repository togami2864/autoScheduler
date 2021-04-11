import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import format from 'date-fns/format';
import add from 'date-fns/add';

export const DaysPicker: React.FC = () => {
  const [day, setDay] = useState(new Date());
  const moveToNextDay = () => {
    setDay((crr) => add(crr, { days: 1 }));
  };
  const moveToPrevDay = () => {
    setDay((crr) => add(crr, { days: -1 }));
  };
  return (
    <DaysPickerContainer>
      <IconButton
        colorScheme="blue"
        aria-label="move to tomorrow"
        icon={<ArrowLeftIcon />}
        onClick={moveToPrevDay}
      />
      <DateWrapper>
        <DateDisplay>{format(day, 'yyyy/MM/dd')}</DateDisplay>
        <DayOfTheWeek>{format(day, 'EEEE')}</DayOfTheWeek>
      </DateWrapper>

      <IconButton
        colorScheme="blue"
        aria-label="move to yesterday"
        icon={<ArrowRightIcon />}
        onClick={moveToNextDay}
      />
    </DaysPickerContainer>
  );
};

const DaysPickerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 20px;
`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  padding: 0 5px;
  margin: 0 20px;
`;

const DateDisplay = styled.h1`
  font-size: 36px;
`;

const DayOfTheWeek = styled.h2`
  font-size: 24px;
`;

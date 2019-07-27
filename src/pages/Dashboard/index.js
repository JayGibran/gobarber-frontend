import React, { useState, useMemo } from 'react';
import { format, subDays, addDays } from 'date-fns';
import en from 'date-fns/locale/en-GB';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';

import { Container, Time } from './styles';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(() => format(date, 'do MMMM', { locale: en }), [
    date,
  ]);

  function handlePreviousDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button onClick={handlePreviousDay} type="button">
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>{dateFormatted}</strong>
        <button onClick={handleNextDay} type="button">
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>
      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Jay Gibran</span>
        </Time>
        <Time available>
          <strong>09:00</strong>
          <span>Available</span>
        </Time>
        <Time>
          <strong>10:00</strong>
          <span>Jay Gibran</span>
        </Time>
        <Time>
          <strong>11:00</strong>
          <span>Jay Gibran</span>
        </Time>
      </ul>
    </Container>
  );
}

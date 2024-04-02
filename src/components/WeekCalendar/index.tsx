import { useEffect, useState } from "react";
import { Container, Day, WeekDay, WrapperDayWeek } from "./styles";
import { DotOutline } from "phosphor-react-native";
import { useTheme } from "styled-components";

type Props = {
  selectedDate: Date;
  onChangeDateSelected(date: Date): void;
};

export const WeekCalendar = ({ selectedDate, onChangeDateSelected }: Props) => {
  const theme = useTheme();

  const [weekDates, setWeekDates] = useState<Date[]>([]);

  function generateWeekCalendar() {
    const dates = [] as Date[];

    for (let index = 1; index < 8; index++) {
      const dateNow = new Date();

      const difference = index - dateNow.getDay();

      const dateDayWeek = new Date(
        dateNow.setDate(dateNow.getDate() + difference)
      );

      dates.push(dateDayWeek);
    }

    setWeekDates(dates);
  }

  useEffect(() => {
    generateWeekCalendar();
  }, []);

  return (
    <Container>
      {weekDates.map((date) => (
        <WrapperDayWeek onPress={() => onChangeDateSelected(date)}>
          <WeekDay
            style={{
              color:
                date.toLocaleDateString() === selectedDate.toLocaleDateString()
                  ? theme.COLORS.PRIMARY
                  : theme.COLORS.NEUTRAL_200,
            }}
          >
            {date
              .toLocaleDateString("pt-BR", { weekday: "short" })
              .charAt(0)
              .toUpperCase() +
              date
                .toLocaleDateString("pt-BR", { weekday: "short" })
                .replace(".", "")
                .slice(1)}
          </WeekDay>
          <Day
            style={{
              color:
                date.toLocaleDateString() === selectedDate.toLocaleDateString()
                  ? theme.COLORS.PRIMARY
                  : theme.COLORS.NEUTRAL_300,
            }}
          >
            {date.toLocaleDateString("pt-BR", { day: "2-digit" })}
          </Day>
          <DotOutline
            weight="fill"
            color={
              date.toLocaleDateString() === selectedDate.toLocaleDateString()
                ? theme.COLORS.PRIMARY
                : "transparent"
            }
          />
        </WrapperDayWeek>
      ))}
    </Container>
  );
};

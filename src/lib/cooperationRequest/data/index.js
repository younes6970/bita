export const DATA_DAY = () => {
  let firstDay = 1;
  const lastDay = 31;
  const day = [];
  for (firstDay; firstDay <= lastDay; firstDay++) {
    day.push(firstDay);
  }
  return day
};
export const DATA_MONTH = [
  {
    title: "فروردین",
    id: 1,
  },
  {
    title: "اردیبهشت",
    id: 2,
  },
  {
    title: "خرداد",
    id: 3,
  },
  {
    title: "تیر",
    id: 4,
  },
  {
    title: "مرداد",
    id: 5,
  },
  {
    title: "شهریور",
    id: 6,
  },
  {
    title: "مهر",
    id: 7,
  },
  {
    title: "آبان",
    id: 8,
  },
  {
    title: "آذر",
    id: 9,
  },
  {
    title: "دی",
    id: 10,
  },
  {
    title: "بهمن",
    id: 11,
  },
  {
    title: "اسفند",
    id: 12,
  },
];
export const DATA_YEAR = (number) => {
  let downOld = 1360;
  const upOld = number;
  const year = [];
  for (downOld; downOld <= upOld; downOld++) {
    year.push(downOld);
  }
  return year;
};

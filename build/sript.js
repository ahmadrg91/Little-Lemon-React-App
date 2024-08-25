const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];

const getTimes = (date) => [...times];

const removeTime = (time) => {
  return times.filter((item) => item !== time);
};

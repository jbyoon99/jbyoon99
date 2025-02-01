type get12HourTimeWithNotation = () => string;

export const get12HourTimeWithNotation: get12HourTimeWithNotation = () => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes().toString().padStart(2, "0");

  const formattedTime = `${hour % 12 || 12}:${minute} ${
    hour < 12 ? "AM" : "PM"
  }`;

  return formattedTime;
};

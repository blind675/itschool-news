export function getFormattedDate(dateString) {
  const currentDate = new Date(dateString);
  let month = currentDate.getMonth();
  month = month + 1;
  let day;
  let year = currentDate.getFullYear();

  if (currentDate.getDate() < 10) {
    day = "0" + currentDate.getDate();
  } else {
    day = currentDate.getDate();
  }

  if (month < 10) {
    month = "0" + month;
  }

  return `${day}/${month}/${year}`;
}

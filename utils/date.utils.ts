export function formatDate(date: Date = new Date()) {
  let newDate: Date = date;
  if (Object.prototype.toString.call(date) !== "[object Date]") {
    newDate = new Date(date);
  }

  if (isNaN(newDate.getTime())) {
    throw new Error("Invalid date");
  }

  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  return newDate.toLocaleDateString("en-US", options);
}

export function formatYear(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  return year;
}

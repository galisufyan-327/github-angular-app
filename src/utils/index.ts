
const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  };

  const formattedDate = new Date(dateString).toLocaleString('en-US', options);
  return formattedDate;
}

export {
  formatDate
}
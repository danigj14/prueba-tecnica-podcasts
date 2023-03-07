export function formatDate(date: Date): string {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export function formatDuration(durationMillis: number): string {
  const minutes = Math.floor(durationMillis / 1000 / 60);
  const seconds = Math.floor(durationMillis / 1000) % 60;

  const formattedMinutes = minutes > 9 ? minutes : `0${minutes}`;
  const formattedSeconds = seconds > 9 ? seconds : `0${seconds}`;

  return `${formattedMinutes}:${formattedSeconds}`;
}

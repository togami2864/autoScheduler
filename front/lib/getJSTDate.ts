import format from 'date-fns/format';
import { utcToZonedTime } from 'date-fns-tz';

export const getJSTDate = (utcDate: Date): string => {
  const jstDate = utcToZonedTime(utcDate, 'Asia/Tokyo');
  return format(jstDate, 'yyyy-MM-dd HH:mm:ss');
};

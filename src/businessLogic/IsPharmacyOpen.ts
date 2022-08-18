import { Pharmacy } from '../models/Pharmacy';
import { Shift } from '../models/Shift';

const checkDay = (day: Shift[], currentHour: string) => {
  let isOpen = false;
  day.forEach((shift: Shift) => {
    if (shift.start <= currentHour && shift.end >= currentHour) {
      isOpen = true;
      return true;
    }
  });
  return isOpen;
};

export const isPharmacyOpen = (pharmacy: Pharmacy, date: Date = new Date()) => {
  const day = date.getDay();
  const currentHour = date.getHours() + ':' + date.getMinutes();
  switch (day) {
    case 0:
      return checkDay(pharmacy.schedule.sunday, currentHour);
    case 1:
      return checkDay(pharmacy.schedule.monday, currentHour);
    case 2:
      return checkDay(pharmacy.schedule.tuesday, currentHour);
    case 3:
      return checkDay(pharmacy.schedule.wednesday, currentHour);
    case 4:
      return checkDay(pharmacy.schedule.thursday, currentHour);
    case 5:
      return checkDay(pharmacy.schedule.friday, currentHour);
    case 6:
      return checkDay(pharmacy.schedule.saturday, currentHour);
    default:
      return false;
  }
};

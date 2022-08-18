import { Shift } from '../models/Shift';

export type ShiftJson = {
  [key: string]: string | number;
};

const shiftMapper = (data: ShiftJson | undefined): Shift | undefined => {
  if (data && data.startTime && data.endTime) {
    return {
      start: data.startTime as string,
      end: data.endTime as string,
    };
  }
  return undefined;
};

export { shiftMapper };

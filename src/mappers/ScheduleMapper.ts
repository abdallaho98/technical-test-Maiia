import { Schedule } from '../models/Schedule';
import { ShiftJson, shiftMapper } from './ShiftMapper';

export type ScheduleJson = {
  [key: string]: any;
};

const scheduleMapper = (data: ScheduleJson | undefined): Schedule => {
  let schedule = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  } as Schedule;

  if (data) {
    if (data.MONDAY && data.MONDAY.isActive) {
      schedule.monday = data.MONDAY.schedules.map((shift: ShiftJson) =>
        shiftMapper(shift),
      );
    }

    if (data.TUESDAY && data.TUESDAY.isActive) {
      schedule.tuesday = data.TUESDAY.schedules.map((shift: ShiftJson) =>
        shiftMapper(shift),
      );
    }

    if (data.WEDNESDAY && data.WEDNESDAY.isActive) {
      schedule.wednesday = data.WEDNESDAY.schedules.map((shift: ShiftJson) =>
        shiftMapper(shift),
      );
    }

    if (data.THURSDAY && data.THURSDAY.isActive) {
      schedule.thursday = data.THURSDAY.schedules.map((shift: ShiftJson) =>
        shiftMapper(shift),
      );
    }

    if (data.FRIDAY && data.FRIDAY.isActive) {
      schedule.friday = data.FRIDAY.schedules.map((shift: ShiftJson) =>
        shiftMapper(shift),
      );
    }

    if (data.SATURDAY && data.SATURDAY.isActive) {
      schedule.saturday = data.SATURDAY.schedules.map((shift: ShiftJson) =>
        shiftMapper(shift),
      );
    }

    if (data.SUNDAY && data.SUNDAY.isActive) {
      schedule.sunday = data.SUNDAY.schedules.map((shift: ShiftJson) =>
        shiftMapper(shift),
      );
    }
  }

  return schedule;
};

export { scheduleMapper };

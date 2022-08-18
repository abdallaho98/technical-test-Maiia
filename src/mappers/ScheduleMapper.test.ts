import * as MapperShift from './ShiftMapper';
import { scheduleMapper } from './ScheduleMapper';
import { Schedule } from '../models/Schedule';

const defaultSchedule = {
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: [],
} as Schedule;

describe('Testing Mapping Json to Shift', () => {
  beforeEach(() => {
    jest
      .spyOn(MapperShift, 'shiftMapper')
      .mockReturnValue({ start: '08:00', end: '12:00' });
  });

  it('when Json is Undefined', () => {
    expect(scheduleMapper(undefined)).toStrictEqual(defaultSchedule);
  });

  it('When Json is Empty', () => {
    expect(scheduleMapper({})).toStrictEqual(defaultSchedule);
  });

  it('When Json contains random things', () => {
    expect(scheduleMapper({ startTime: '08:00' })).toStrictEqual(
      defaultSchedule,
    );
  });

  it('When Json contains only monday but no isActive', () => {
    const mappedObject = scheduleMapper({
      MONDAY: {
        schedules: {
          startTime: '08:00',
          endTime: '12:00',
          position: 0,
        },
      },
    });
    expect(mappedObject).toBeDefined();
    expect(mappedObject).toStrictEqual(defaultSchedule);
  });

  it('When Json contains only monday but isActive is false', () => {
    const mappedObject = scheduleMapper({
      MONDAY: {
        schedules: {
          startTime: '08:00',
          endTime: '12:00',
          position: 0,
        },
        isActive: false,
      },
    });
    expect(mappedObject).toBeDefined();
    expect(mappedObject).toStrictEqual(defaultSchedule);
  });

  it('When Json contains only monday one shift and isActive', () => {
    const mappedObject = scheduleMapper({
      MONDAY: {
        schedules: [
          {
            startTime: '08:00',
            endTime: '12:00',
            position: 0,
          },
        ],
        isActive: true,
      },
    });
    expect(mappedObject).toBeDefined();
    expect(mappedObject).toStrictEqual({
      ...defaultSchedule,
      monday: [{ start: '08:00', end: '12:00' }],
    });
  });

  it('When Json contains only monday two shifts and isActive', () => {
    const mappedObject = scheduleMapper({
      MONDAY: {
        schedules: [
          {
            startTime: '08:00',
            endTime: '12:00',
            position: 0,
          },
          {
            startTime: '13:00',
            endTime: '16:00',
            position: 1,
          },
        ],
        isActive: true,
      },
    });
    expect(mappedObject).toBeDefined();
    expect(mappedObject).toStrictEqual({
      ...defaultSchedule,
      monday: [
        { start: '08:00', end: '12:00' },
        { start: '08:00', end: '12:00' },
      ],
    });
  });

  it('When Json contains only monday two shifts and isActive is false', () => {
    const mappedObject = scheduleMapper({
      SUNDAY: {
        schedules: [
          {
            startTime: '08:00',
            endTime: '12:00',
            position: 0,
          },
          {
            startTime: '13:00',
            endTime: '16:00',
            position: 1,
          },
        ],
        isActive: false,
      },
    });
    expect(mappedObject).toBeDefined();
    expect(mappedObject).toStrictEqual(defaultSchedule);
  });
});

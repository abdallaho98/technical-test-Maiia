import { shiftMapper } from '../mappers/ShiftMapper';
import { Shift } from '../models/Shift';

describe('Testing Mapping Json to Shift', () => {
  it('when Json is Undefined', () => {
    expect(shiftMapper(undefined)).toBeUndefined();
  });

  it('When Json is Empty', () => {
    expect(shiftMapper({})).toBeUndefined();
  });

  it('When Json contains only the start time', () => {
    expect(shiftMapper({ startTime: '08:00' })).toBeUndefined();
  });

  it('When Json contains all the info', () => {
    const mappedObject = shiftMapper({
      startTime: '08:00',
      endTime: '12:00',
      position: 3,
    });
    expect(mappedObject).toBeDefined();
    expect(mappedObject).toStrictEqual({
      start: '08:00',
      end: '12:00',
    } as Shift);
  });
});

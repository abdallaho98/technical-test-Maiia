import { Pharmacy } from '../models/Pharmacy';
import { Schedule } from '../models/Schedule';
import { isPharmacyOpen } from './IsPharmacyOpen';

const defaultSchedule = {
  monday: [
    { start: '08:00', end: '12:00' },
    { start: '14:00', end: '16:00' },
  ],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: [],
} as Schedule;

const defaultPharmacy = {
  id: 'Test',
  name: 'Test',
  image: 'Test',
  schedule: defaultSchedule,
  address: 'Test',
} as Pharmacy;

describe('Testing If the Pharmacy is Open Or no In date precise', () => {
  it('When date is not in schedule', () => {
    let date: Date = new Date(2022, 7, 18, 11, 23);
    expect(isPharmacyOpen(defaultPharmacy, date)).toBe(false);
  });

  it('When date is in schedule', () => {
    let date: Date = new Date(2022, 7, 29, 11, 30);
    expect(isPharmacyOpen(defaultPharmacy, date)).toBe(true);
  });

  it('When date is between 2 shifts', () => {
    let date: Date = new Date(2022, 7, 29, 12, 30);
    expect(isPharmacyOpen(defaultPharmacy, date)).toBe(false);
  });

  it('When date is in 2nd shift', () => {
    let date: Date = new Date(2022, 7, 29, 15, 30);
    expect(isPharmacyOpen(defaultPharmacy, date)).toBe(true);
  });

  it('When date is in night', () => {
    let date: Date = new Date(2022, 7, 29, 19, 30);
    expect(isPharmacyOpen(defaultPharmacy, date)).toBe(false);
  });
});

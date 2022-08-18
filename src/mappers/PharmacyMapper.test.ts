import { defaultPharmacyPic } from '../../constants/doc';
import { apiImages } from '../api/routes';
import { pharmacyMapper } from '../mappers/PharmacyMapper';
import { Pharmacy } from '../models/Pharmacy';
import { Schedule } from '../models/Schedule';
import * as MapperSchedule from './ScheduleMapper';

const defaultSchedule = {
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: [],
} as Schedule;

describe('Testing Mapping Json to Pharmacy', () => {
  beforeEach(() => {
    jest
      .spyOn(MapperSchedule, 'scheduleMapper')
      .mockReturnValue(defaultSchedule);
  });

  it('when Json is Undefined', () => {
    expect(pharmacyMapper(undefined)).toBeUndefined();
  });

  it('When Json is Empty', () => {
    expect(pharmacyMapper({})).toBeUndefined();
  });

  it('When Json contains only the ID', () => {
    expect(pharmacyMapper({ id: 'Test' })).toBeUndefined();
  });

  it('When Json contains all the info but no image', () => {
    const mappedObject = pharmacyMapper({
      id: 'Test',
      center: { name: 'Test' },
      publicInformation: {
        address: { fullAddress: 'Test' },
        officeInformation: {},
      },
    });
    expect(mappedObject).toBeDefined();
    expect(mappedObject).toStrictEqual({
      id: 'Test',
      name: 'Test',
      address: 'Test',
      image: defaultPharmacyPic,
      schedule: defaultSchedule,
      specialties: [],
    } as Pharmacy);
  });

  it('When Json contains all the info but no specialties', () => {
    const mappedObject = pharmacyMapper({
      id: 'Test',
      center: { name: 'Test' },
      publicInformation: {
        address: { fullAddress: 'Test' },
        mainPicture: { thumbnailS3Id: 'Test' },
        officeInformation: {},
      },
    });
    expect(mappedObject).toBeDefined();
    expect(mappedObject).toStrictEqual({
      id: 'Test',
      name: 'Test',
      address: 'Test',
      image: apiImages + 'Test',
      schedule: defaultSchedule,
      specialties: [],
    } as Pharmacy);
  });

  it('When Json contains all the info', () => {
    const mappedObject = pharmacyMapper({
      id: 'Test',
      center: { name: 'Test' },
      publicInformation: {
        address: { fullAddress: 'Test' },
        mainPicture: { thumbnailS3Id: 'Test' },
        officeInformation: {},
        expertises: [
          {
            name: 'Test',
          },
        ],
      },
    });
    expect(mappedObject).toBeDefined();
    expect(mappedObject).toStrictEqual({
      id: 'Test',
      name: 'Test',
      address: 'Test',
      image: apiImages + 'Test',
      schedule: defaultSchedule,
      specialties: ['Test'],
    } as Pharmacy);
  });
});

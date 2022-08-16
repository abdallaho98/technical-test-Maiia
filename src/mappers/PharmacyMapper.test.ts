import { PharmacyJson, pharmacyMapper } from '../mappers/PharmacyMapper';
import { Pharmacy } from '../models/Pharmacy';

describe('Testing Mapping Json to Pharmacy', () => {
  it('when Json is Undefined', () => {
    expect(pharmacyMapper(undefined)).toBeUndefined();
  });

  it('When Json is Empty', () => {
    expect(pharmacyMapper({})).toBeUndefined();
  });

  it('When Json contains only the ID', () => {
    expect(pharmacyMapper({ id: 'Test' })).toBeUndefined();
  });

  it('When Json contains all the info', () => {
    const mappedObject = pharmacyMapper({
      id: 'Test',
      center: { name: 'Test' },
    });
    expect(mappedObject).toBeDefined();
    expect(mappedObject).toStrictEqual({
      id: 'Test',
      name: 'Test',
    } as Pharmacy);
  });
});
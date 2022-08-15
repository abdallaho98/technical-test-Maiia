import { Pharmacy } from '../models/Pharmacy';

export type PharmacyJson = {
  [key: string]: any;
};

const pharmacyMapper = (data: PharmacyJson): Pharmacy => {
  return {
    id: data.id,
    name: data.center.name,
  };
};

export { pharmacyMapper };

import { Pharmacy } from '../models/Pharmacy';

export type PharmacyJson = {
  [key: string]: any;
};

const pharmacyMapper = (
  data: PharmacyJson | undefined,
): Pharmacy | undefined => {
  if (data && data.id && data.center && data.center.name)
    return {
      id: data.id,
      name: data.center.name,
    };
  return undefined;
};

export { pharmacyMapper };

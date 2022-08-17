import { Pharmacy } from '../models/Pharmacy';
import { UPDATE_PHARMACY } from './types';

export const updatePharmacy = (pharmacy: Pharmacy) => ({
  type: UPDATE_PHARMACY,
  payload: pharmacy,
});

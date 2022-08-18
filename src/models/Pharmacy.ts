import { Schedule } from './Schedule';

export interface Pharmacy {
  id: string;
  name: string;
  address: string;
  image: string;
  specialties?: string[];
  schedule: Schedule;
}

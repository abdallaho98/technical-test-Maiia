import { Shift } from './Shift';

export interface Schedule {
  monday: Shift[];
  tuesday: Shift[];
  wednesday: Shift[];
  thursday: Shift[];
  friday: Shift[];
  saturday: Shift[];
  sunday: Shift[];
}

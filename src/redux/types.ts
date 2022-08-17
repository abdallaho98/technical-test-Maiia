import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Pharmacy } from '../models/Pharmacy';

export default interface AppState {
  pharmacyDetails: Pharmacy;
}

export const UPDATE_PHARMACY = 'UPDATE_PHARMACY';

export type GenericAction = {
  type: string;
  payload?: any;
};

export type ThunkDispatchType = ThunkDispatch<AppState, null, Action>;

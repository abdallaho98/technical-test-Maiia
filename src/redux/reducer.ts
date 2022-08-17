import { GenericAction, UPDATE_PHARMACY } from './types';

const initialState = {
  pharmacyDetails: undefined,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
const appReducer = (state = initialState, action: GenericAction) => {
  switch (action.type) {
    case UPDATE_PHARMACY:
      return {
        ...state,
        pharmacyDetails: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;

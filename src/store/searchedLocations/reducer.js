import types from './types';

const initialState = {
  locations: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LOCATION_SUCCESS:
      return {
        locations: [action.payload, ...state.locations],
      };

    default:
      return state;
  }
};

import types from './types';

const setLocation = payload => ({payload, type: types.SET_LOCATION_REQUEST});

export default {
  setLocation,
};

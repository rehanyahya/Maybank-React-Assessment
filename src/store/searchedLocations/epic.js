import {ofType} from 'redux-observable';
import {map, delay} from 'rxjs/operators';
import types from './types';

const setLocationRequest = action$ =>
  action$.pipe(
    ofType(types.SET_LOCATION_REQUEST),
    delay(1000), ///DUMMY ASYNC
    map(action => ({
      type: types.SET_LOCATION_SUCCESS,
      payload: action.payload,
    })),
  );

export default setLocationRequest;

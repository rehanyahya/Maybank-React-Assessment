import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {createEpicMiddleware, combineEpics} from 'redux-observable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import {locationEpic, locationReducer} from './searchedLocations';

const epicMiddleware = createEpicMiddleware();

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['locationReducer'],
};

const ConfigureStore = () => {
  const reducers = combineReducers({locationReducer});

  const persistedReducer = persistReducer(persistConfig, reducers);

  const epics = combineEpics(locationEpic);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: [epicMiddleware],
  });

  epicMiddleware.run(epics);
  return store;
};

export default ConfigureStore;

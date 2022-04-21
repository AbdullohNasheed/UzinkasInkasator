import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import {rootReducer} from './slices';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return {store, persistor};
};

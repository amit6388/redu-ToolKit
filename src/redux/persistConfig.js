import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth','counter'], // Only persist auth slice (add other slices if needed)
};

export default persistConfig;
 
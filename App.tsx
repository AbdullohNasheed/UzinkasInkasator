import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import {StatusBar} from 'react-native';
import configureStore from './src/store/configureStore';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
let {persistor, store} = configureStore();
export {store};
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <AuthStack />
          <StatusBar barStyle="light-content" backgroundColor={'#181926'} />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
export default App;

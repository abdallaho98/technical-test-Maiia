import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import theme from './src/theme/theme';
import Router from './src/navigation/Router';
import store from './src/redux/store';
import { ThemeProvider } from 'styled-components';
import { useFonts } from 'expo-font';

const appTheme = theme;

const App = () => {
  const [] = useFonts({
    'SpaceMono-Regular': require('./assets/fonts/SpaceMono-Regular.ttf'),
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <SafeAreaProvider>
          <StatusBar />
          <Router />
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

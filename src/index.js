import * as React from 'react';
import {StatusBar} from 'react-native';
import Routes from './routes';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#E74C3C" />
      <Routes/>
    </>
  );
}

export default App;

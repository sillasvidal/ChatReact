import React from 'react';
import { View, StatusBar } from 'react-native';

import Chat from './pages/Chat';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#28262E" />
    <View style={{ backgroundColor: '#312E38', flex: 1 }}>
      <Chat />
    </View>
  </>
);

export default App;

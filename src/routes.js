import 'react-native-gesture-handler';

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/main';
import User from './pages/user';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen !!!!</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Início" component={Main} 
            options={{
                headerTitleAlign: 'center', headerStyle:{backgroundColor: '#E74C3C'},
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}/>

        <Stack.Screen name="Perfil" component={User} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

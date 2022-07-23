import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import {Absensi, History, Home, Posting, Tentang} from '../pages/Pages';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="homePage"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="posting"
        component={Posting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="absensi"
        component={Absensi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="history"
        component={History}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="tentang"
        component={Tentang}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Router;

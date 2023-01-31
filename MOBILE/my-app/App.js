import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import AllTasks from "./src/screens/AllTasks";
import OpenedTasks from "./src/screens/OpenedTasks";
import CreateTasks from "./src/screens/CreateTasks";
import FinishedTasks from "./src/screens/FinishedTasks";
import CanceledTasks from "./src/screens/CanceledTasks";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Todas" component={AllTasks} />
        <Tab.Screen name="Cadastrar" component={CreateTasks} />
        <Tab.Screen name="Abertas" component={OpenedTasks} />
        <Tab.Screen name="Finalizadas" component={FinishedTasks} />
        <Tab.Screen name="Canceladas" component={CanceledTasks} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
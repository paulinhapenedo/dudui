import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DetailsScreen } from '~/screens/Details';
import { HomeScreen } from '~/screens/HomeScreen';

import { RootStackParamList } from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <RootStack.Navigator id="RootStack" initialRouteName="Home">
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="Details" component={DetailsScreen} />
    </RootStack.Navigator>
  );
}

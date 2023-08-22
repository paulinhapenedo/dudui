import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { RootNavigator } from '~/navigation/root';

/* eslint-disable-next-line*/
export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

import { View, Text, Button } from 'react-native';

import { ScreenProps } from '~/types/navigation';

export function HomeScreen({ navigation }: ScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

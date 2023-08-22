import { View, Text, Button } from 'react-native';

import { ScreenProps } from '~/types/navigation';

export function DetailsScreen({ navigation }: ScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

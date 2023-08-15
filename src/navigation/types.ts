import type { NativeStackScreenProps } from '@react-navigation/native-stack';

const Routes = {
  Home: 'Home',
  Details: 'Details',
};

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

export type Props = NativeStackScreenProps<
  RootStackParamList,
  keyof typeof Routes,
  'RootStack'
>;

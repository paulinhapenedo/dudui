import { RouteProp } from '@react-navigation/native';
import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

const Routes = {
  Home: 'Home',
  Details: 'Details',
};

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

export type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  keyof typeof Routes,
  'RootStack'
>;

export type NavigationType = NativeStackNavigationProp<
  RootStackParamList,
  keyof typeof Routes,
  undefined
>;

export type RouteType = RouteProp<RootStackParamList, keyof typeof Routes>;

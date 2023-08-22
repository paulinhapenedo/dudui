import { NavigationType, RouteType, ScreenProps } from '~/types/navigation';

export const createTestProps = (): unknown & ScreenProps => ({
  navigation: {
    navigate: jest.fn(),
  } as unknown as NavigationType,
  route: jest.fn() as unknown as RouteType,
});

// const AllTheProviders = ({ children }) => {
//   return { children };
// };

// const customRender = (ui, options) =>
//   render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
// export * from '@testing-library/react-native';

// override render method
// export { customRender as render };

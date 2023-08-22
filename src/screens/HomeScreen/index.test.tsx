import { render, screen } from '@testing-library/react-native';
import React from 'react';

import { createTestProps } from '~/test-utils/test-utils';

import { HomeScreen } from './index';

describe('<HomeScreen />', () => {
  const screenProps = createTestProps();
  it(`has "Home Screen" as title`, () => {
    render(<HomeScreen {...screenProps} />);

    const title = screen.getByText('Home Screen');
    expect(title).toBeTruthy();
  });
});

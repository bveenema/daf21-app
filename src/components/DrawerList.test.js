import React from 'react';
import { shallow } from 'enzyme';
import DrawerList from './DrawerList';

it('renders without crashing', () => {
  shallow(<DrawerList />);
});

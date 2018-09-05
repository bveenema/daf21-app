import React from 'react';
import { shallow } from 'enzyme';
import ShotBox from './ShotBox';

it('renders without crashing', () => {
  shallow(<ShotBox />);
});

import React from 'react';
import { shallow } from 'enzyme';
import MixStation from './MixStation';

it('renders without crashing', () => {
  shallow(<MixStation />);
});

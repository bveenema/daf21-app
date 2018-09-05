import React from 'react';
import { shallow } from 'enzyme';
import StatusChip from './StatusChip';

it('renders without crashing', () => {
  shallow(<StatusChip status="test"/>);
});

import React from 'react';
import { shallow } from 'enzyme';
import LoginBox from './LoginBox';

it('renders without crashing', () => {
  shallow(<LoginBox open={true}/>);
});

import React from 'react';
import { shallow } from 'enzyme';
import Navigation from '../Navigation';

describe('Navigation', () => {
  const navigation = shallow(<Navigation />);

  it('renders properly', () => {
    expect(navigation).toMatchSnapshot();
  });

  it('contains 4 links', () => {
    expect(navigation.find('.list-item-link')).toHaveLength(4);
  });
});

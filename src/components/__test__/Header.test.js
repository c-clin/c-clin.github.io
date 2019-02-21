import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header', () => {
  const header = shallow(<Header />);

  it('renders properly', () => {
    expect(header).toMatchSnapshot();
  });

  it('renders the name as the h1 text', () => {
    expect(header.find('h1').text()).toEqual('Catherine Lin');
  });

  it('renders 3 icons', () => {
    expect(header.find('i')).toHaveLength(3);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import About from '../About';

describe('About', () => {
  const about = shallow(<About />);

  it('renders properly', () => {
    expect(about).toMatchSnapshot();
  });

  it('renders the header text', () => {
    expect(about.find('h2').text()).toEqual('About');
  });

  it('has 4 about-me sections', () => {
    expect(about.find('.about-me')).toHaveLength(4);
  });
});

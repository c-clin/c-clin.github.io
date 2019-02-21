import React from 'react';
import { shallow } from 'enzyme';
import Contact from '../Contact';

describe('Contact', () => {
  const contact = shallow(<Contact />);

  it('renders properly', () => {
    expect(contact).toMatchSnapshot();
  });

  it('has 3 contact-links', () => {
    expect(contact.find('.contact-links__container')).toHaveLength(3);
  });

  it('renders the header text correctly', () => {
    expect(contact.find('h2').text()).toEqual('Contact');
  });

  it('contains one image icon', () => {
    expect(contact.find('img').exists()).toBe(true);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import Work from '../Work';

describe('Work', () => {
  const work = shallow(<Work />);

  it('renders properly', () => {
    expect(work).toMatchSnapshot();
  });

  it('renders the header text', () => {
    expect(work.find('h2').text()).toEqual('Work');
  });

  it('contains three projects', () => {
    expect(work.find('.project').length).toEqual(3);
  });
});

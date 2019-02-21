import React from 'react';
import { shallow } from 'enzyme';
import Projects from '../Projects';

describe('Projects', () => {
  let props = {
    history: {
      goBack: jest.fn()
    }
  };

  const projects = shallow(<Projects {...props} />);

  it('renders properly', () => {
    expect(projects).toMatchSnapshot();
  });

  it('contains two headers with the correct texts', () => {
    expect(projects.find('h2')).toHaveLength(2);

    expect(
      projects
        .find('h2')
        .first()
        .text()
    ).toEqual('Freelance Work');

    expect(
      projects
        .find('h2')
        .last()
        .text()
    ).toEqual('Personal Projects');
  });

  it('contains a go back button', () => {
    expect(projects.find('.go-back-btn').exists()).toBe(true);
  });
});

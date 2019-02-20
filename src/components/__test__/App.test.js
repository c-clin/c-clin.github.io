import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import Portfolio from '../Portfolio';
import Projects from '../Projects';

describe('App', () => {
  const app = shallow(<App />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('renders the portfolio homepage correctly', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(Portfolio)).toHaveLength(1);
    expect(wrapper.find(Projects)).toHaveLength(0);
  });
});

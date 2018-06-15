import React from 'react';
import { shallow } from 'enzyme';

import Home from 'components/Home/Home';

import AuthenticationToken from 'helpers/AuthenticationToken';

describe('home', () => {
  var component;
  var createComponent = (props) => {
    if (component) {
      component.unmount();
    }

    component = shallow(
      <Home {...props} />
    );
  };

  afterEach(() => {
    if (component) {
      component.unmount();
    }
  });

  it('renders properly', () => {

  });
});

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import FullHeader from '../../src/FullHeader';

describe('FullHeader Component', () => {
  it('should have <header> tag when mount.', () => {
    const wrapper = shallow(<FullHeader />);
    expect(wrapper.find('header')).to.have.length(1);
  });

  // Title Context
  context('title', () => {
    it('should have <h1> tag when title passed.', () => {
      const wrapper = shallow(
        <FullHeader
        title="TDD"
        />);
        expect(wrapper.find('h1')).to.have.length(1);
      });

      it('should not have <h1> tag when title is not passed.', () => {
        const wrapper = shallow(<FullHeader />);
        expect(wrapper.find('h1')).to.have.length(0);
      });

      it('should have <h1> tag with the title passed.', () => {
        const wrapper = shallow(
          <FullHeader
          title="TDD"
          />);
          expect(wrapper.find('h1').props().children).to.be.equal("TDD");
        });
      });

      // SubTitle Context
      context('subtitle', () => {
        it('should have <h2> tag when subtitle passed.', () => {
          const wrapper = shallow(
            <FullHeader
              subtitle="Course"
            />);
          expect(wrapper.find('h2')).to.have.length(1);
        });
      });

    });

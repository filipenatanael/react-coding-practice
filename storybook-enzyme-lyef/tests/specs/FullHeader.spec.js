import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import FullHeader from '../../src/FullHeader';

chai.use(chaiEnzyme);

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
        title="Trainning" />);
        expect(wrapper.find('h1')).to.have.length(1);
    });

    it('should not have <h1> tag when title is not passed.', () => {
        const wrapper = shallow(<FullHeader />);
        expect(wrapper.find('h1')).to.have.length(0);
    });

    it('should have <h1> tag with the title passed.', () => {
        const wrapper = shallow(
        <FullHeader
        title="Trainning" />);
        expect(wrapper.find('h1').props().children).to.be.equal("Trainning");
    });
  });

  // SubTitle Context
  context('subtitle', () => {
    it('should have <h2> tag when subtitle passed.', () => {
        const wrapper = shallow(
        <FullHeader
        subTitle="Test Driven Development" />);
        expect(wrapper.find('h2')).to.have.length(1);
    });

    it('should not have <h2> tag when subtitle is not passed.', () => {
        const wrapper = shallow(
        <FullHeader />);
        expect(wrapper.find('h2')).to.have.length(0);
    });

    it('should have h1 tag with the title passed', () => {
        const wrapper = shallow(<FullHeader
          subTitle="Test Driven Development" />);
        expect(wrapper.find('h2').props().children).to.be.equal("Test Driven Development");
    });
  });

  // bgColor Context
  context('bgColor', () => {
    it('should have background-color equal #ccc when none is passed.', () => {
        const wrapper = shallow(<FullHeader
          title="Trainning"
          bgColor="#ccc" />);
        console.log(wrapper.props().style);
        expect(wrapper.props().style.backgroundColor).to.be.equal('#ccc');
        /* TypeError: (0 , _chai.expect)(...).to.have.style is not a function
        expect(wrapper).to.have.style('background-color').equal('#ccc'); */
    });

    it('should have background-color equal #ccc when none is passed.', () => {
        const wrapper = shallow(
        <FullHeader
        subTitle="Test Driven Development" />);
        expect(wrapper.find('h2').props().children).to.be.equal("Test Driven Development");
    });
  });

  // textColor Context
  context('textColor', () => {
    it('should have color equal #fff when none is passed.', () => {
        const wrapper = shallow(<FullHeader
          title="Trainning" />);
        expect(wrapper.props().style.color).equal('#fff');
        // expect(wrapper).to.have.style('color').equal('#fff');
    });

    it('should have color equal #ff0000 when none is passed.', () => {
        const wrapper = shallow(<FullHeader
          title="Trainning"
          textColor="#ff0000" />);
        expect(wrapper.props().style.color).equal('#ff0000');
    });
  });

  // font Context
  context('font', () => {
    it('should have font equal sans-serif when none is passed.', () => {
        const wrapper = shallow(<FullHeader />);
        expect(wrapper.props().style.fontFamily).equal('sans-serif');
    });

    it('should have font equal open-sans when none is passed.', () => {
        const wrapper = shallow(<FullHeader
           font="open-sans" />);
        expect(wrapper.props().style.fontFamily).equal('open-sans');
    });
  });

});

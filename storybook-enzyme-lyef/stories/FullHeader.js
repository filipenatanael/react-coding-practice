import React from 'react';
import FullHeader from '../src/FullHeader'; // This is our component
import { storiesOf } from '@storybook/react';

storiesOf('FullHeader Component', module)
    .add('With title', () => (
        <FullHeader title="TDD Trainning" />
    ))
    .add('With title and subTitle', () => (
        <FullHeader
          title="TDD Trainning"
          subTitle="Test Driven Development" />
    ))
    .add('With title, subTitle, bgColor', () => (
        <FullHeader
          title="TDD Trainning"
          subTitle="Test Driven Development"
          bgColor="#3229988" />
    ))
    .add('With title, subTitle, bgColor and textColor', () => (
        <FullHeader
          title="TDD Trainning"
          subTitle="Test Driven Development"
          bgColor="#3229988"
          textColor="#FF9900" />
    ))
    .add('With title, subTitle, bgColor, textColor and font', () => (
        <FullHeader
          title="TDD Trainning"
          subTitle="Test Driven Development"
          bgColor="#3229988"
          textColor="#FF9900"
          font="cursive" />
    ))
    .add('With title, subTitle and bgImg', () => (
        <FullHeader
          title="TDD Trainning"
          subTitle="Test Driven Development"
          bgImg="https://cdn.pixabay.com/photo/2018/07/08/01/44/mountains-3523153_960_720.jpg" />
    ))
    .add('With title, subTitle and video', () => (
        <FullHeader
          title="TDD Trainning"
          subTitle="Test Driven Development"
          bgColor="#3229988"
          textColor="#FF9900"
          video="https://cdn.pixabay.com/photo/2018/07/08/01/44/mountains-3523153_960_720.jpg" />
    ))

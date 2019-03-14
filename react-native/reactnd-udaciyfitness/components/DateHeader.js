import React, { Component } from 'react';
import { Text } from 'react-native';

export default function DateHeader({ date }) {
  return (
    <Text style={{ color: '#fff' }}>
      {date}
    </Text>
  )
}

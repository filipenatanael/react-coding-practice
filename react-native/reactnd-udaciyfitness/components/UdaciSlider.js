import React, { Component } from 'react';
import { View, Text, Slider } from 'react-native';

export default function UdaciSlider({ max, unit, step, value, OnChange }) {
  return (
    <View>
      <Slider
        step={step}
        value={value}
        maximumValue={max}
        minimumvalue={0}
        onValueChange={OnChange}
      />
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  )
}

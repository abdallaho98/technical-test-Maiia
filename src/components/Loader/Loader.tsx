import React from 'react';
import { ActivityIndicator } from 'react-native';

type Props = {
  color: string;
  size: 'small' | 'large' | number;
};

const Loader = ({ color, size }: Props) => (
  <ActivityIndicator animating color={color} size={size} />
);

export default Loader;

import { DefaultTheme as defaultT } from '@react-navigation/native';
import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  ...defaultT,
  colors: {
    ...defaultT.colors,
    primary: '#64C9C3',
    secondary: '#F68092',
    black: '#000000',
    white: '#ffffff',
    tint: '#fff',
    error: '#E67766',
    success: '#509D59',
    warning: '#FF9900',
    input: {
      text: '#606060',
    },
  },
  dimensions: {
    space: 8,
    general: 16,
  },
  font: {
    sizes: {
      small: 16,
      medium: 24,
      title: 32,
    },
  },
};

export default theme;

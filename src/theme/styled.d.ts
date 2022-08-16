import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      cardBackground: string;
      black: string;
      white: string;
      tint: string;
      error: string;
      success: string;
      warning: string;
      input: {
        text: string;
      };
    };
    dimensions: {
      space: number;
      general: number;
    };
    font: {
      sizes: {
        small: number;
        medium: number;
        title: number;
        extraSmall: number;
        TooSmall: number;
        TooMuchSmall: number;
      };
    };
  }
}

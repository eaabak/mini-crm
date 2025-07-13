import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      success: string;
      background: string;
      surface: string;
      textPrimary: string;
      textSecondary: string;
    };
    font: {
      base: string;
    };
  }
}
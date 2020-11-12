// import original module declarations
import 'styled-components';
import { screens, spacing } from './theme';

declare module 'styled-components' {
  // Ref: https://styled-components.com/docs/api#create-a-declarations-file
  export interface DefaultTheme {
    spacing: typeof spacing;
    screens: typeof screens;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    colors: Record<string, any>;
  }
}

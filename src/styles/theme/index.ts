import {colors} from './_colors';
import {gradients} from './_gradients';
import {shadows} from './_shadows';
import {fontSizes} from './_fontSizes';

export const theme = {colors, gradients, shadows, fontSizes};
export type ThemeType = typeof theme;

declare module '@emotion/react' {
    export interface Theme extends ThemeType {}
}

import {colors} from './_colors';
import {gradients} from './_gradients';
import {shadows} from './_shadows';
import {fontSizes} from './_fontSizes';
import {size} from './_size';
import {breakpoints} from './_breakpoints';

export const theme = {colors, gradients, shadows, fontSizes, size, breakpoints};
export type ThemeType = typeof theme;

declare module '@emotion/react' {
    export interface Theme extends ThemeType {}
}

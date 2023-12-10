export const calloutOptions = [
  'info',
  'warning',
  'error',
  'tip',
  'note',
] as const;
export type CalloutOption = (typeof calloutOptions)[number];

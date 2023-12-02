import React, {HTMLAttributes, ReactNode} from 'react';
import {EmotionJSX} from '@emotion/react/types/jsx-namespace';
import {InfoCallout} from './InfoCallout';
import {TipCallout} from './TipCallout';
import {ErrorCallout} from './ErrorCallout';
import {WarningCallout} from './WarningCallout';
import {NoteCallout} from './NoteCallout';

export const Callout: React.FC<HTMLAttributes<HTMLElement>> = ({...args}) => {
  const CALLOUT_TYPE = {
    '[!info]': (children: ReactNode) => (
      <InfoCallout {...args}>{children}</InfoCallout>
    ),
    '[!warning]': (children: ReactNode) => (
      <WarningCallout {...args}>{children}</WarningCallout>
    ),
    '[!error]': (children: ReactNode) => (
      <ErrorCallout {...args}>{children}</ErrorCallout>
    ),
    '[!tip]': (children: ReactNode) => (
      <TipCallout {...args}>{children}</TipCallout>
    ),
    '[!note]': (children: ReactNode) => (
      <NoteCallout {...args}>{children}</NoteCallout>
    ),
  };

  const isCallOutType = (str?: string): str is keyof typeof CALLOUT_TYPE => {
    return str ? CALLOUT_TYPE.hasOwnProperty(str) : false;
  };

  const calloutComponent = (): EmotionJSX.Element | undefined => {
    if (!Array.isArray(args.children)) return;

    const calloutContent = args.children.at(1).props.children;
    if (!(typeof calloutContent === 'string')) return;

    const calloutContentArray = calloutContent.split('\n');
    const calloutType = calloutContentArray.at(0);

    if (!isCallOutType(calloutType)) return;

    const calloutChildren = calloutContentArray.slice(1).join('\n');
    return CALLOUT_TYPE[calloutType](calloutChildren);
  };

  return calloutComponent() ?? <NoteCallout {...args} />;
};

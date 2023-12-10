import React, {HTMLAttributes, ReactNode} from 'react';
import {InfoCallout} from './InfoCallout';
import {TipCallout} from './TipCallout';
import {ErrorCallout} from './ErrorCallout';
import {WarningCallout} from './WarningCallout';
import {NoteCallout} from './NoteCallout';
import useCallout from './useCallout';

export const Callout: React.FC<HTMLAttributes<HTMLElement>> = ({...args}) => {
  const calloutComponents = {
    info: (children: ReactNode) => (
      <InfoCallout {...args}>{children}</InfoCallout>
    ),
    warning: (children: ReactNode) => (
      <WarningCallout {...args}>{children}</WarningCallout>
    ),
    error: (children: ReactNode) => <ErrorCallout>{children}</ErrorCallout>,
    tip: (children: ReactNode) => <TipCallout {...args}>{children}</TipCallout>,
    note: (children: ReactNode) => (
      <NoteCallout {...args}>{children}</NoteCallout>
    ),
  };
  const {type, children} = useCallout({children: args.children});
  return calloutComponents[type](children);
};

import {HTMLAttributes, ReactNode} from 'react';
import {EmotionJSX} from '@emotion/react/types/jsx-namespace';
import {InfoCallout} from './InfoCallout';
import {TipsCallout} from './TipsCallout';
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
    '[!tips]': (children: ReactNode) => (
      <TipsCallout {...args}>{children}</TipsCallout>
    ),
    '[!note]': (children: ReactNode) => (
      <NoteCallout {...args}>{children}</NoteCallout>
    ),
  };

  const isCallOutType = (str: string): str is keyof typeof CALLOUT_TYPE => {
    return CALLOUT_TYPE.hasOwnProperty(str);
  };

  const calloutComponent = (): EmotionJSX.Element | undefined => {
    if (!Array.isArray(args.children)) return;

    const calloutContent = args.children.at(1).props.children.split('\n');
    const calloutType = calloutContent.at(0);

    if (!isCallOutType(calloutType)) return <NoteCallout {...args} />;

    const calloutChildren = calloutContent.slice(1) as ReactNode;
    return CALLOUT_TYPE[calloutType](calloutChildren);
  };

  return calloutComponent();
};

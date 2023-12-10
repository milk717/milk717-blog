import React, {ReactElement, ReactNode} from 'react';
import {CalloutOption, calloutOptions} from './type';

const useCallout = ({
  children,
}: {
  children: ReactNode;
}): {type: CalloutOption; children: ReactNode} => {
  let calloutType: null | CalloutOption = null;
  const isArrayReactElement = (obj: unknown): obj is Array<ReactElement> => {
    return Array.isArray(obj);
  };

  const filterReactElement = (children: Array<ReactElement>) => {
    return children.filter(v => React.isValidElement(v));
  };

  const getCalloutText = (str: string) => {
    const pattern = `^\\s*\\[!(${calloutOptions.join('|')})]`;
    const regex = new RegExp(pattern);
    return str.match(regex)?.at(1) as CalloutOption;
  };

  if (!isArrayReactElement(children)) return {type: 'note', children: children};
  const reactElementArray = filterReactElement(children);

  const newChildren = reactElementArray.map(element => {
    if (
      typeof element.type === 'function' &&
      typeof element.props.children === 'string' &&
      element.type.name === 'p'
    ) {
      const [type, ...str] = element?.props?.children?.split('\n');

      if (!calloutType) {
        calloutType = getCalloutText(type);
        return calloutType
          ? {...element, props: {children: str.join('\n')}}
          : element;
      }
    }
    return element;
  });
  calloutType = calloutType ? calloutType : 'note';

  return {type: calloutType, children: newChildren};
};

export default useCallout;

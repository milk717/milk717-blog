import {useEffect, useState} from 'react';
import useDebounce from './useDebounce';

const useWindowWidth = () => {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0,
  );

  const debouncedHandleResize = useDebounce(() => {
    setWidth(window.innerWidth);
  }, 150);

  useEffect(() => {
    window.addEventListener('resize', debouncedHandleResize);

    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, [debouncedHandleResize]);

  return width;
};

export default useWindowWidth;

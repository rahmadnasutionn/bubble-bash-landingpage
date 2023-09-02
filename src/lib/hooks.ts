import * as React from 'react';

export function useLockBodyScroll(
  lock: boolean = true,
  ref?: React.RefObject<HTMLElement>,
) {
    
  React.useLayoutEffect(() => {
    const element = ref?.current || document.body;

    if (lock) {
      const prevValue = element.style.overflow || 'visible';
      element.style.overflow = 'hidden';

      return () => {
        element.style.overflow = prevValue;
      }
    }

  }, [lock, ref]);
};
// High-order components must use the spreading operator
// to pass the props down to the real one.
/* eslint-disable react/jsx-props-no-spreading */
import React, { useLayoutEffect, useState } from 'react';
import { breakpoint } from './device';

const defaultMediaQueries = {
  mediaIsPhone: false,
  mediaIsTablet: false,
  mediaIsLaptop: false,
  mediaIsDesktop: false
};

export function withMediaQueries(LazyComp) {
  const WithMediaQueries = (props) => {
    const [mediaQueries, setMediaQueries] = useState(defaultMediaQueries);

    useLayoutEffect(() => {
      function updateSize() {
        setMediaQueries({
          ...mediaQueries,
          mediaIsPhone:
            window.innerWidth >= breakpoint.mobileS
            && window.innerWidth < breakpoint.tablet,
          mediaIsTablet:
            window.innerWidth >= breakpoint.tablet
            && window.innerWidth < breakpoint.laptop,
          mediaIsLaptop:
            window.innerWidth >= breakpoint.laptop
            && window.innerWidth < breakpoint.desktop,
          mediaIsDesktop: window.innerWidth >= breakpoint.desktop
        });
      }

      window.addEventListener('resize', updateSize);
      updateSize();

      return () => window.removeEventListener('resize', updateSize);

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <LazyComp {...props} {...mediaQueries} />;
  };

  WithMediaQueries.displayName = `WithMediaQueries(${
    LazyComp.displayName || LazyComp.name || 'Component'
  })`;

  return WithMediaQueries;
}
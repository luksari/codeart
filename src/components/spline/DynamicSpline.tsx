import { SplineProps } from '@splinetool/react-spline';
import dynamic from 'next/dynamic';
import { forwardRef } from 'react';

const WrappedSpline = dynamic(() => import('./WrappedSpline'), {
  ssr: false,
  loading: () => <p>Loading Scene...</p>,
});

export const DynamicSpline = forwardRef<HTMLDivElement, SplineProps>(
  (props, ref) => {
    return <WrappedSpline {...props} splineRef={ref} />;
  }
);

DynamicSpline.displayName = 'Dynamic Spline';

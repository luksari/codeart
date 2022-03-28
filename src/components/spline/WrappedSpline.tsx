import Spline, { SplineProps } from '@splinetool/react-spline';
import { ForwardedRef } from 'react';

type WrappedSplineProps = {
  splineRef: ForwardedRef<HTMLDivElement>;
} & SplineProps;

const WrappedSpline = ({ splineRef, ...props }: WrappedSplineProps) => {
  return <Spline ref={splineRef} {...props} />;
};

export default WrappedSpline;

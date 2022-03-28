import React from 'react';
import { DynamicSpline } from '@src/components/spline/DynamicSpline';
import classes from './SkateboardContainer.module.scss';

export const SkateboardContainer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <DynamicSpline
          className={classes.splineCanvas}
          scene="https://prod.spline.design/U0QUksU3Vyp1rTJK/scene.spline"
        />
      </div>
    </div>
  );
};

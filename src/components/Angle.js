import React from 'react';

export const Angle = (props) => {
  const onBackClicked = () => {
    props.toggleAngle();
    props.toggleHome();
  };
  return (
    <div>
      <div>This is angle page</div>
      <div onClick={onBackClicked}>Back</div>
    </div>
  );
};

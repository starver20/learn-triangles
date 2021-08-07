import React from 'react';

export const Area = (props) => {
  const onBackClicked = () => {
    props.toggleArea();
    props.toggleHome();
  };
  return (
    <div>
      <div>This ia area page</div>
      <div onClick={onBackClicked}>Back</div>
    </div>
  );
};

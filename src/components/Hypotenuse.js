import React from 'react';

export const Hypotenuse = (props) => {
  const onBackClicked = () => {
    props.toggleHypotenuse();
    props.toggleHome();
  };
  return (
    <div>
      <div>This is hypotenuse page</div>
      <div onClick={onBackClicked}>Back</div>
    </div>
  );
};

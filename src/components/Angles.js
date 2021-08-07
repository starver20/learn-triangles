import React from 'react';

export const Angles = (props) => {
  console.log(props.showHome);
  const onBackClicked = () => {
    props.toggleAngles();
    props.toggleHome();
  };
  return (
    <div>
      <div>Hey there this is the Angles page!</div>
      <div onClick={onBackClicked}>Back</div>
    </div>
  );
};

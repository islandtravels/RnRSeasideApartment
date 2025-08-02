import React from 'react';

const Page_Label = ({ pageLabel, white, blue }) => {
  const labelColor = white ? '' : blue ? 'label-blue' : '';

  return (
    <div className={`Page_Label ${labelColor}`}>
      <p>{pageLabel}</p>
    </div>
  );
};

export default Page_Label;
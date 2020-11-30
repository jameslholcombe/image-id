import React from 'react';
import RingLoader from 'react-spinners/RingLoader';

const Spinner = ({ loading }) => {
  return (
      <RingLoader
        size={100}
        color={'#38acd6'}
        loading={loading}
      />
  );
};

export default Spinner;

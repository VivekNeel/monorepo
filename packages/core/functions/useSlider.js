// @flow
import React from 'react';

const useSlider = () => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    setInterval(() => {
      setCount(p => p + 1);
    }, 2000);
  }, []);
  return {
    count,
  };
};

export default useSlider;

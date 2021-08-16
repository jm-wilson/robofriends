import React from 'react';

interface IScrollProps {
  children?: JSX.Element;
}
const Scroll: React.FC<IScrollProps> = (props): JSX.Element => {
  return (
    <div style={{ overflowY: 'scroll', border: '3px solid black', height: '800px' }}>
      {props.children}
    </div>
  );
};

export default Scroll;

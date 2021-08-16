import React from 'react';
import { IRobot } from '../containers/App';

const Card: React.FC<IRobot> = ({ name, email, id }): JSX.Element => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow'>
      <img alt='robots' height='200' width='200' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;

import React from 'react';
import Card from './Card';
import { IRobot } from '../containers/App';

interface ICardListProps {
  robots: IRobot[];
}

const CardList: React.FC<ICardListProps> = ({ robots }): JSX.Element => {
  return !robots.length ? (
    <div></div>
  ) : (
    <div>
      {robots.map((user, i) => {
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />;
      })}
    </div>
  );
};

export default CardList;

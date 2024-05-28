import React from 'react';
import ItemCell from './ItemCell';


interface GameBoardProps {
  items: { hasItem: boolean; clicked: boolean }[];
  onItemClick: (index: number) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ items, onItemClick }) => {
  return (
    <div className='main-block'>
      {items.map(({ hasItem, clicked }, index) => (
        <ItemCell
          key={index}
          onClick={() => onItemClick(index)}
          hasItem={hasItem}
          clicked={clicked}
        />
      ))}
    </div>
  );
};

export default GameBoard;

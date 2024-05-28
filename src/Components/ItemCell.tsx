import React from 'react';
import './ItemCell.css';

interface ItemCellProps {
  onClick: () => void;
  hasItem: boolean;
  clicked: boolean;
}

const getItemContent = (hasItem: boolean, clicked: boolean): string => {
  return clicked ? (hasItem ? 'O' : '') : '';
};

const getItemStyle = (hasItem: boolean, clicked: boolean): React.CSSProperties => {
  return {
    backgroundColor: hasItem && clicked ? 'transparent' : '',
    border: hasItem && clicked ? 'none' : '',
    padding: '20px',
    margin: '5px',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
  };
};

const ItemCell: React.FC<ItemCellProps> = ({ onClick, hasItem, clicked }) => {
  const itemContent = getItemContent(hasItem, clicked);
  const itemStyle = getItemStyle(hasItem, clicked);

  return (
    <div className={`cell ${clicked ? 'clicked' : ''}`} style={itemStyle} onClick={onClick}>
      {itemContent}
    </div>
  );
};

export default ItemCell;

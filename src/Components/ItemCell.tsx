import React from 'react';

interface ItemCellProps {
  onClick: () => void;
  hasItem: boolean;
  clicked: boolean;
}

const ItemCell: React.FC<ItemCellProps> = ({ onClick, hasItem, clicked }) => {
  const cellClass = clicked ? 'cell clicked' : 'cell';
  const content = getContent(hasItem, clicked);
  const cellStyle = getCellStyle(hasItem, clicked);

  return (
    <div className={cellClass} style={cellStyle} onClick={onClick}>
      {content}
    </div>
  );
};

const getContent = (hasItem: boolean, clicked: boolean): string => {
  return clicked ? (hasItem ? 'O' : '') : '';
};

const getCellStyle = (hasItem: boolean, clicked: boolean): React.CSSProperties => {
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

export default ItemCell;

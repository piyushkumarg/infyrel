import '../styles/boardCell.css';

const BoardCell = ({ cell }: any) => (
  <div className={`BoardCell ${cell.className}`}>
    <div className="Sparkle"></div>
  </div>
);

export default BoardCell;

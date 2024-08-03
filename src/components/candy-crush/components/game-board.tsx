import Image from 'next/image';

const GameBoard = ({
  currentColorArrangement,
}: {
  currentColorArrangement: string[];
}) => {
  return (
    <div className="sm:w-[560px] sm:h-[560px]  h-[360px] w-[360px] flex  justify-center items-center flex-wrap sm:gap-2 gap-1">
      {currentColorArrangement.map((candyColor, index) => (
        <Image
          className="sm:w-[60px] sm:h-[60px] w-[40px] h-[40px] p-1 cursor-move rounded-lg shadow-lg shadow-blue-800"
          width={100}
          height={100}
          key={index}
          src={candyColor}
          alt={candyColor}
          data-id={index}
        />
      ))}
    </div>
  );
};

export default GameBoard;

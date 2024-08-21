import { memo } from 'react';
import Preview from './preview';

const Previews = ({ tetrominoes }: any) => {
  // We want everything except the last one
  const previewTetrominoes = tetrominoes
    .slice(1 - tetrominoes.length)
    .reverse();

  return (
    <>
      {previewTetrominoes.map((tetromino: any, index: any) => (
        <Preview tetromino={tetromino} index={index} key={index} />
      ))}
    </>
  );
};

export default memo(Previews);

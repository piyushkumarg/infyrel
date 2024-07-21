import { HangmanDrawingInterface } from '../types/index.type';

const HEAD = (
  <div
    style={{
      width: '50px',
      height: '50px',
      borderRadius: '100%',
      border: '5px solid black',
      position: 'absolute',
      top: '30px',
      right: '-25px',
    }}
  />
);

const BODY = (
  <div
    style={{
      width: '5px',
      height: '75px',
      background: 'black',
      position: 'absolute',
      top: '75px',
      right: 0,
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: '75px',
      height: '5px',
      background: 'black',
      position: 'absolute',
      top: '100px',
      right: '-75px',
      rotate: '-30deg',
      transformOrigin: 'left bottom',
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: '75px',
      height: '5px',
      background: 'black',
      position: 'absolute',
      top: '100px',
      right: '5px',
      rotate: '30deg',
      transformOrigin: 'right bottom',
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: '75px',
      height: '5px',
      background: 'black',
      position: 'absolute',
      top: '145px',
      right: '-70px',
      rotate: '60deg',
      transformOrigin: 'left bottom',
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: '75px',
      height: '5px',
      background: 'black',
      position: 'absolute',
      top: '145px',
      right: 0,
      rotate: '-60deg',
      transformOrigin: 'right bottom',
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingInterface) {
  return (
    <div style={{ position: 'relative' }}>
      {BODY_PARTS.slice(0, numberOfGuesses).map((part, index) => (
        <div key={index}>{part}</div>
      ))}
      <div
        style={{
          height: '30px',
          width: '5px',
          background: 'black',
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: '5px',
          width: '125px',
          background: 'black',
          marginLeft: '75px',
        }}
      />
      <div
        style={{
          height: '275px',
          width: '5px',
          background: 'black',
          marginLeft: '75px',
        }}
      />
      <div
        style={{
          height: '5px',
          width: '250px',
          marginLeft: '-45px',
          background: 'black',
        }}
      />
    </div>
  );
}

import { Footer, Header } from '@/components/navigation';
import { TetrisGame } from '@/components/tetris';

const TetrisPage = () => {
  return (
    <>
      <Header />
      <TetrisGame />
      <Footer />
    </>
  );
};

export default TetrisPage;

import { Footer, Header } from '@/components/navigation';
import { TicTacToe } from '@/components/tic-tac-toe';

const Page = () => {
  return (
    <>
      <Header />
      <TicTacToe />
      <Footer />
    </>
  );
};

export default Page;

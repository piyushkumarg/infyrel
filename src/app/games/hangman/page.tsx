import { Hangman } from '@/components/hangman';
import { Footer, Header } from '@/components/navigation';

const HangmanPage = () => {
  return (
    <>
      <Header />
      <Hangman />
      <Footer />
    </>
  );
};

export default HangmanPage;

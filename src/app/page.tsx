import SiteLayout from '@/layout/siteLayout';
import { Home } from '@/components/home';
import { Header, Footer } from '@/components/navigation';

const HomePage = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default HomePage;

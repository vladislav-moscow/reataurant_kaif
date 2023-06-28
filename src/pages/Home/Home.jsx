import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, Menu } from '../../container';
import { Navbar } from '../../components';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </>
  )
}

export default Home;
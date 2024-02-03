import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Hero from "./Hero";
import Special from "./Special";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import About from "./About";

function Homepage() {
  return (
    <>
      <Main>
        <Hero />
        <Special />
        <Testimonials />
        <About />
      </Main>
      <Footer></Footer>
    </>
  );
}

export default Homepage;

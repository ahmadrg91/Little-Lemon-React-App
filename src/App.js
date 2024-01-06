import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Special from "./Components/Special";
import Testimonials from "./Components/Testimonials";
import About from "./Components/About";

function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
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

export default App;

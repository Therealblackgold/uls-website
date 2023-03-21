import About from "../components/About";
import AnimatePage from "../components/AnimatePage";
import Assurance from "../components/Assurance";
import Clients from "../components/Clients";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Mission from "../components/Mission";

const Home = () => {
  return (
    <AnimatePage>
      <Hero />
      <Intro />
      <About />
      <Mission />
      <Assurance />
      <Clients />
    </AnimatePage>
  );
};

export default Home;

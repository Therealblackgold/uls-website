import AnimatePage from "../components/AnimatePage";
import Assurance from "../components/Assurance";
import Clients from "../components/Clients";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Mission from "../components/Mission";
import Services from "./Services";

const Home = () => {
  return (
    <AnimatePage>
      <Hero />
      <Intro />
      <Mission />
      <Assurance />
      <Services />
      <Clients />
    </AnimatePage>
  );
};

export default Home;

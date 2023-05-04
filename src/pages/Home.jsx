import AnimatePage from "../components/AnimatePage";
import Assurance from "../components/Assurance";
import Clients from "../components/Clients";
import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import List from "../components/List";
import Mission from "../components/Mission";
import VipList from "../components/VipList";
import Services from "./Services";

const Home = () => {
  return (
    <AnimatePage>
      <Hero />
      <Intro />
      <Mission />
      <Assurance />
      <List />
      <VipList />
      <ContactUs />
      <Clients />
    </AnimatePage>
  );
};

export default Home;

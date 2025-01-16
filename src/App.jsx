import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Section2 from "./components/section2/Section2";
import Section3 from "./components/section3/Section3";
import Info from "./components/info/Info";
import Food from "./components/food/Food";
import Testimonial from "./components/testimonial/Testimonial";
import Application from "./components/application/Application";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <Section2 />
      <Section3 />
      <Info />
      <Food />
      <Testimonial />
      <Application />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

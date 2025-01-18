import "./Home.css";
import image from './IMAGE (31).png'
const Home = () => {
  return <div className="home">
    <div className="left">
      <h1>Momentum</h1>
      <p>Launch your product-and savor the momentum</p>
      <button><a href="/">Get the App</a></button>
    </div>
    <div className="right">
      <img src={image} alt="" />
    </div>
  </div>;
};

export default Home;

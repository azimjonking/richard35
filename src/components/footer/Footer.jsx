import "./Footer.css";
import foot from "./foot.png";
const Footer = () => {
  return (
    <div className="wrapper">
      <footer>
        <img src={foot} alt="photo" />
        <nav>
          <ul>
            <li>
              <a href="#">Email</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Image License Info</a>
            </li>
            <li>
              <a href="#">Powered by Webflow</a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

import "./Header.css";
const Header = () => {
  return <div>
    <div className="nav">
      <div className="logo">Richard</div>
      <ul>
          <li><a href="/">About</a></li>
          <li><a href="/">Features</a></li>
          <li><a href="/">How to Use</a></li>
          <li><a href="/">Download</a></li>
      </ul>
    </div>
  </div>;
};

export default Header;

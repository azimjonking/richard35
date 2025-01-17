import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <h1>Get updates from Richard</h1>
      <p>New course alerts, discounts and free lessons</p>
      <div className="inp-section">
        <input type="text" placeholder="Enter your email" />{" "}
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Contact;

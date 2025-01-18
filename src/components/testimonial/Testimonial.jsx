import "./Testimonial.css";
import Test from '../../assets/test.png'
import Play from '../../assets/play.png'
const Testimonial = () => {
  return(
    <section className="testimonial-container">
      <div className="testimonial">
        <div className="test-info">
        <img src={Test} alt="" />
        <p>HeadNulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Pus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.ing</p>

        <h2>Joshua Home — New York Times</h2>

        <h3 style={{marginTop: "50px"}}>▣  ▢</h3>
        </div>

        <div className="test-img">
          <img src={Play} alt="" />
        </div>
      </div>

    </section>
  );
};

export default Testimonial;

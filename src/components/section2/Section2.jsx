import "./Section2.css";
import Img11 from '../../assets/img11.png'

const Section2 = () => {
  return (
    <section className="section-container">
      <p>Aenean Consectetur Porta</p>
      <h1>Nullam quis risus eget urna mollis <br /> ornare vel eu leo.</h1>
      <div className="section3-img">
        <img src={Img11} alt="" />
      </div>
    </section>
  )
}

export default Section2
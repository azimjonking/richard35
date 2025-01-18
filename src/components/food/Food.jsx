import "./Food.css";
import burger from "./burger.png"
import chips from "./chips.png"

const Food = () => {
  return <div className="food">
    <div className="bur">
      <div className="text">
        <p className="p1">Aenean Consectetur Porta</p>
        <h1>Sem Risus Elit Vestibulum</h1>
        <p className="p2">Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. <u>Cras mattis consectetur</u> purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.</p>
      </div>
      <div className="foto">
        <img src={burger} alt="" />
      </div>
    </div>

    <div className="chips">
      <div className="fot">
        <img src={chips} alt="" />
      </div>
      <div className="tex">
        <p className="p3">Aenean Consectetur Porta</p>
        <h1 className="waz">Parturient Tortor</h1>
        <p className="p4">Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. <u>Cras mattis consectetur</u> purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.</p>
      </div>
    </div>
  </div>
};

export default Food;

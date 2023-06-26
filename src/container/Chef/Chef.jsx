import { SubHeading } from "../../components";
import images from "../../constants/images";
import "./chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Слово шеф-повара" />
      <h1 className="headtext__cormorant">Во что мы верим</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            Приготовить хороший салат и быть искусным дипломатом –
          </p>
        </div>
        <p className="p__opensans">
          {" "}
          дело одинаково тонкое: и в том, и в другом случае важно в точности
          знать, сколько употребить масла, а сколько уксуса.{" "}
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Шеф-повар & основатель</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;

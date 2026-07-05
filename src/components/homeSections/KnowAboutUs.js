import Paragraph from "../../UI/Paragraph";
import SectionTitle from "../../Layout/SectionTitle";
import MediaSrc from "../../assets/New/BG_home.jpg";

const KnowAbotUS = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row align-items-center flex-lg-row flex-column-reverse">
          <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
            <SectionTitle
              sectTilte={"Accelerate Innovation. Deliver at Scale."}
              className="mb-3"
            />
            <Paragraph className="desc-black w-80 my-2 t_just">
              We help ambitious organizations build, scale, and optimize their
              digital capabilities. From deploying top-tier engineering teams
              to developing AI-powered products and transforming global
              events—Macber delivers solutions that move your business forward.
            </Paragraph>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
            <img className="w-100 border-radus-32" src={MediaSrc} alt="macber" />
          </div>
        </div>
      </div>
    </>
  );
};

export default KnowAbotUS;

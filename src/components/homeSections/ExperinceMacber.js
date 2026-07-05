import Paragraph from "../../UI/Paragraph";
import SectionTitle from "../../Layout/SectionTitle";
import MediaSrc from "../../assets/New/Bg_2.jpg";

const ExperinceMacber = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row align-items-center flex-lg-row flex-column-reverse">
          <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
            <SectionTitle sectTilte={"Why Macber"} className="mb-3" />
            <div>
              <SectionTitle
                className="bold-400 darkBlue"
                sectTilte={"Global Talent, Regional Insights"}
              />
              <Paragraph className="desc-black my-2 w-80 t_just">
                Our engineers, product managers, and designers bring global
                experience and regional relevance—ensuring every solution is
                practical, scalable, and aligned to your business needs. We are
                your trusted partner for digital transformation, delivering
                results that drive growth and innovation.
              </Paragraph>
              <SectionTitle
                className="bold-400 darkBlue"
                sectTilte={"Mature Process. Measurable Impact."}
              />
              <Paragraph className="desc-black my-2 w-80 t_just">
                We combine agile delivery with structured execution to reduce
                risk, shorten time-to-market, and deliver results you can
                measure in growth, efficiency, and ROI.
              </Paragraph>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
            <img className="w-100 border-radus-32" alt="img" src={MediaSrc} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperinceMacber;

import BackGroundLight from "../../Layout/BackGroundLight";
import Button from "../../UI/Button";
import SectionTitle from "../../Layout/SectionTitle";
import Card from "../../UI/Card";
import { Cards } from "../../data/BlogsData";
const Blog = () => {
  return (
    <>
      <section className="pt_3">
        <BackGroundLight className="backGround_light">
          <div className="container py_5">
            <SectionTitle sectTilte={"Insights"} />
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-4">
              {Cards.map((card, index) => {
                return (
                  <div className="col mb-2" key={index}>
                    <Card
                      id={card.id}
                      className={"p-0 blog_card "}
                      image={card.img}
                      imgWidth="100%"
                      imgHeight="100%"
                      mainTitle={card.title}
                      titleStyle={"text-black bold-500 font-sm "}
                      desc={card.desc}
                      descStyle={"desc-black"}
                      link={"Continue reading"}
                      to={`/${card.id}`}
                      linkColor={"lightBlue3"}
                      linkStyle={"linkHover d-flex"}
                      arrowColor={"#07174C"}
                    />
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-5">
              <Button
                className="btn-blue btn-scale"
                tagType="link"
                to="/insights"
              >
                Learn more
              </Button>
            </div>
          </div>
        </BackGroundLight>
      </section>
    </>
  );
};
export default Blog;

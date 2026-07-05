import React from "react";
import { Cards } from "../../data/BlogsData";
import { useParams } from "react-router-dom";
import MainHeaderWrapper from "../../Layout/MainHeaderWrapper";
import SectionHeader from "../../Layout/SectionHeader";
import SectionTitle from "../../Layout/SectionTitle";
import Media from "../../UI/Media";
import de_1 from "../../assets/New/De_1.jpg";
import de_2 from "../../assets/New/De_2.jpg";
import de_3 from "../../assets/New/De_3.jpg";
import de_4 from "../../assets/New/De_4.jpg";
import de_img from "../../assets/New/Img_detalis.jpg";
import CardDetalis from "../../UI/CardDetalis";
import Error from "../../Layout/404";

const Details = () => {
  const { id } = useParams();
  const card = Cards.find((item) => item.id == id);

  if (!card) {
    return <Error />;
  }

  return (
    <div>
      <div>
        <div className="overflow">
          <MainHeaderWrapper bg={card.img} height="54rem" animate={true}>
            <SectionHeader
              mini={card.mini}
              titleName="title_home"
              title={card.title}
            />
          </MainHeaderWrapper>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-xl-7 col-md-6 col-sm-12">
              <ul>
                <li className="desc-black my-4 ms-xl-4 op_7 t_just ">
                  {card.titleDesc1}
                </li>
                <li className="desc-black my-4 ms-xl-4 op_7 t_just ">
                  {card.titleDesc2}
                </li>
                <li className="desc-black my-4 ms-xl-4 op_7 t_just ">
                  {card.titleDesc3}
                </li>
                <div className="row py-4">
                  <div className="col-xl-6 col-md-6 col-sm-12 ">
                    <Media className="w-100 " type="img" src={de_img} />
                  </div>
                  <div className="col-xl-6 col-md-6 col-sm-12">
                    <Media className="w-100 " type="img" src={de_img} />
                  </div>
                </div>
                <li className="desc-black my-4 ms-xl-4 op_7 t_just ">
                  {card.titleDesc4}
                </li>
                <li className="desc-black my-4 ms-xl-4 op_7 t_just ">
                  {card.titleDesc5}
                </li>
                <li className="desc-black my-4 ms-xl-4 op_7 t_just ">
                  {card.titleDesc6}
                </li>
                <li className="desc-black my-4 ms-xl-4 op_7 t_just ">
                  {card.titleDesc7}
                </li>
                <li className="desc-black my-4 ms-xl-4 op_7 t_just ">
                  {card.titleDesc8}
                </li>
              </ul>
            </div>
            <div className="col-xl-5 col-md-6 col-sm-12 mt-xl-4">
              <div className="backGround_trans p-3">
                <SectionTitle sectTilte={"Related Insights"} />
                <CardDetalis
                  src={de_1}
                  title={` Unveiling Macber's Proven...`}
                  desc={`   In the world of product development, success is not
                      just about the result; it's about the meticulous
                      strategies....`}
                />
                <CardDetalis
                  src={de_2}
                  title={`Maximizing Efficiency In Prod..`}
                  desc={` In the competitive landscape of product development,
                      efficiency is the key to staying ahead, and Macber has
                      mastered the art of maximi..`}
                />
                <CardDetalis
                  src={de_3}
                  title={` The Complete Guide for 20`}
                  desc={`   As we step into 2024, the landscape of mobile app
                      design continues to evolve, demanding a keen
                      understanding of user preferences, emerging....`}
                />
                <CardDetalis
                  src={de_4}
                  title={` Macber's Insights Into Global.....`}
                  desc={`In the digital age, borders are no longer barriers;
                      they are opportunities for innovation. Macbert , a
                      trailblazer in the realm...`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

import React from "react";
import { CardsIn } from "../../data/BlogsData";
import { useParams } from "react-router-dom";
import MainHeaderWrapper from "../../Layout/MainHeaderWrapper";
import SectionHeader from "../../Layout/SectionHeader";
import SectionTitle from "../../Layout/SectionTitle";
import Media from "../../UI/Media";
import CardDetalis from "../../UI/CardDetalis";
import Error from "../../Layout/404";

const DetalsCardInt = () => {
  const { id } = useParams();
  const card = CardsIn.find((item) => item.id == id);

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
                  <ul className="p-0">
                    {card.titles.map((item, index) => {
                      return (
                        <>
                          {item.titleDesc ? (
                            <li
                              key={index}
                              className="desc-black my-4 ms-xl-4 op_7 t_just"
                            >
                              {item.titleDesc}
                            </li>
                          ) : (
                            ""
                          )}
                          {item.titleImg ? (
                            <div className="row py-4 ">
                              <div className="col-xl-6 col-md-6 col-sm-12  mb-2">
                                <Media
                                  className="w-100 border-radus-32"
                                  type="img"
                                  src={item.titleImg}
                                />
                              </div>

                              <div className="col-xl-6 col-md-6 col-sm-12  mb-2">
                                <Media
                                  className="w-100 border-radus-32"
                                  type="img"
                                  src={item.titleImg}
                                />
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </>
                      );
                    })}
                  </ul>
                </div>
                <div className="col-xl-5 col-md-6 col-sm-12 mt-xl-4">
                  <div className="backGround_trans p-3">
                    <SectionTitle sectTilte={"Related Insights"} />
                    {card.Related.map((item , index)=>{
                      return (
                        <>
                          <CardDetalis
                            key={index}
                            src={item.RelatedImg}
                            title={item.RelatedTitle}
                            desc={item.RelatedDesc}
                            to={`${item.RelatedId}`}
                          />
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
};

export default DetalsCardInt;

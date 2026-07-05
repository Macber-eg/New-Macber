import React from "react";
import Paragraph from "../UI/Paragraph";
import SectionHeader from "../Layout/SectionHeader";
import MainHeaderWrapper from "../Layout/MainHeaderWrapper";
import Colors from "./products/Colors";
import WhereStart from "./serviceSection/WhereStart";
import OurWorkAbot from "./serviceSection/OurWorkAbot";
import AboutProject from "./serviceSection/AboutProject";
import LineTop from "../UI/LineTop";
import { Project } from "../data/BlogsData";
import { useParams } from "react-router-dom";
import Tecnologey from "./products/Tecnologey";
import Background from "./products/Background";
import Typo from "./products/Typo";
import Ph from "../assets/Phonie.svg";
import Media from "../UI/Media";
import Error from "../Layout/404";

function ProjectDetails() {
  const { id } = useParams();
  const card = Project.find((item) => item.id == id);

  if (!card) {
    return <Error />;
  }

  return (
    <>
      <div className="overflow">
        <MainHeaderWrapper bg={card.PageBg} height="38rem" animate={true}>
          <SectionHeader
            title={card.ChildTitle}
            desc={card.ChildDesc}
            DescService={"Service : Ux & Ui design/Development"}
          />
        </MainHeaderWrapper>
      </div>
      <OurWorkAbot linksItems={card.links} />
      <LineTop />
      <AboutProject Items={card.DetailsCompany} />

      <section
        className=" img_fix"
        style={{ backgroundImage: `url("${card.Bg}")` }}
      ></section>

      <Tecnologey />
      <AboutProject Items={card.DetailsColorsSystem} />

      <Background
        styleNatural={{ backgroundColor: `${card.ColorNut}` }}
        stylePrim={{ backgroundColor: `${card.ColorPrim}` }}
        styleBrand={{ backgroundColor: `${card.ColorBrand}` }}
        stylePrim2={{ backgroundColor: `${card.ColorPrim}` }}
        NamePrim={card.NamePrim}
      />
      <Colors
        styleBrand={{ backgroundColor: `${card.ColorBrand}` }}
        styleAcc={{ backgroundColor: `${card.ColorAcct}` }}
        NumColorBrand={card.NumColorBrand}
        NumColorAcct={card.NumColorAcct}
        styleNatural={{ backgroundColor: `${card.ColorNut}` }}
        NutralName={card.NutName}
      />
      <AboutProject Items={card.DetailsType} />

      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-md-12 col-sm-12 py-xl-4 py-5">
            <Media src={Ph} type="img" />
          </div>
          <div className="col-xl-8 col-md-12 col-sm-12">
            <div className="row">
              {card.Details.map((i, e) => {
                return (
                  <Typo
                    key={e}
                    styleFont={{ backgroundColor: `${i.BgFont}` }}
                    PraimaryFont={i.PraimaryFont}
                    all={i.StyleFont}
                    styleFamily={{ fontFamily: `${i.Familly}` }}
                    text={i.NameFont}
                    width={i.WightFont}
                    width2={i.WightFont2}
                    width3={i.WightFont3}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <WhereStart
        sectionTitle={"Got a project in mind?Tell us about it."}
        link={"Contact us"}
      />
    </>
  );
}

export default ProjectDetails;

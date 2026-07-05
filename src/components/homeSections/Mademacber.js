import React from "react";
import SectionTitle from "../../Layout/SectionTitle";
import Oz from "../../assets/New/work 1.jpg";
import Golden from "../../assets/New/golden deal.jpg";
import Legal from "../../assets/New/the legal clinic.jpg";
import Button from "../../UI/Button";
import BigCard from "../../UI/BigCard";
import CaseStydy_Mob from "../ourWork/CaseStydy_Mob";
import Sensi from '../../assets/New/SensiHome.jpg'

const Mademacber = () => {
  return (
    <section className="py-xl-5 py-2">
      <div className="container">
        <SectionTitle sectTilte={"Made by Macber"} />
        <div className="cards_home_made">
          {/* <BigCard
            to={"/our-work/1"}
            src={Oz}
            alt={"oz-img"}
            desc={`OZ Innovations aims to disrupt conventional workplace concepts
                and enable the future of work in the most efficient way..`}
            toBtn={"/our-work/1"}
          /> */}
          <BigCard
            to={"/our-work/2"}
            src={Golden}
            alt={"golden-img"}
            desc={`The Golden Deal was established for e-commerce, and it is an electronic platform that enables the user to sell his products..`}
            toBtn={"/our-work/2"}
          />
          <BigCard
            src={Legal}
            to={"/our-work/3"}
            alt={"legalclinc-img"}
            desc={`Is The First Law Firm Specialized In Serving And Supporting Startups And Empowering Entrepreneurship In MENA Region.`}
            toBtn={"/our-work/3"}
          />
          {/* <BigCard
            src={Sensi}
            to={"/"}
            alt={"legalclinc-img"}
            desc={``}
            toBtn={"/our-work/3"}
          /> */}
        </div>
        <CaseStydy_Mob />
        <div className="text-center">
          <Button
            tagType="link"
            className="btn-blue btn-scale btn 
               mx-auto"
            to="/our-work"
          >
            Explore more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Mademacber;

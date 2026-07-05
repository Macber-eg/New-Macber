import React from "react";
import { Link } from "react-router-dom";
import OzMob from "../../assets/New/Oz_mob.jpg";
import GoldMob from "../../assets/New/Golden_mob.jpg";
import ClinicMob from "../../assets/New/Clinc_mob.jpg";
import Right from "../../assets/icons/arrow_right.svg";
import Media from "../../UI/Media";
import left from "../../assets/icons/arrow_left.svg";
import Slider from "react-slick";
import RinkMob from "../../assets/New/Rink_mob.jpg";
import Sensi from "../../assets/New/SenOurWorkMob.jpg";
import SenLogo from "../../assets/icon/SensiLogo.svg";
import Oz from "../../assets/icon/OzCard.svg";
import Rinku from "../../assets/icon/Rinku 3.svg";
import Clinc from "../../assets/icon/ClincCared.svg";
import Golden from "../../assets/icon/GoldenCard.svg";
import CaseStudyMobCard from "../MobDesign/CaseStudyMobCard";
import RiderLogo from "../../assets/icons/LogoRider.svg";
import RiderImg from "../../assets/New/RiderCaseStudt (2).jpg";
import HyderImg from "../../assets/New/haydrowMob.jpg";
import hyderLogo from "../../assets/New/logoHayd.svg";
import SportsLogo from "../../assets/New/SportsLogo.svg";
import Sports from "../../assets/New/Sportsmob.jpg";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className=" btn_next" onClick={onClick}>
      <Media type="img" className=" " src={Right} />
    </div>
  );
};

const PrevArorow = (props) => {
  const { onClick } = props;
  return (
    <div className=" btn_back" onClick={onClick}>
      <Media type="img" className=" " src={left} />
    </div>
  );
};
const CaseStydy_Mob = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArorow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="card_mobile_case text-center">
        <Slider {...settings}>
          {/* <div className="position-relative my-3">
            <CaseStudyMobCard
              to={`/our-work/1`}
              srclogo={Oz}
              span={"Oz"}
              platform={"Platform"}
              title={` OZ Innovations aims to disrupt conventional workplace concepts
                  and enable the future of work in the most efficient way..`}
              srcImg={OzMob}
            />
          </div> */}
          <div className="position-relative my-3">
            <CaseStudyMobCard
              to={`/our-work/2`}
              srclogo={Golden}
              span={"Golden"}
              platform={"Deal"}
              title={`The Golden Deal was established for e-commerce, and it is an electronic platform that enables the user to sell his products...`}
              srcImg={GoldMob}
            />
          </div>
          <div className="position-relative my-3">
            <CaseStudyMobCard
              to={`/our-work/3`}
              srclogo={Golden}
              span={"The"}
              platform={" Legal Clinic"}
              title={`Is The First Law Firm Specialized In Serving And Supporting Startups And Empowering Entrepreneurship In MENA Region..`}
              srcImg={ClinicMob}
            />
          </div>
          <div className="position-relative my-3">
            <CaseStudyMobCard
              to={`/`}
              srclogo={Rinku}
              span={"Rinku "}
              platform={" System"}
              title={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text `}
              srcImg={RinkMob}
            />
          </div>
          <div className="position-relative my-3">
            <CaseStudyMobCard
              to={`/`}
              srclogo={RiderLogo}
              span={"Riders "}
              platform={"  Platform"}
              title={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text `}
              srcImg={RiderImg}
            />
          </div>
          <div className="position-relative my-3">
            <CaseStudyMobCard
              to={`/`}
              srclogo={RiderLogo}
              span={"Riders "}
              platform={"  Platform"}
              title={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text `}
              srcImg={RiderImg}
            />
          </div>
          <div className="position-relative my-3">
            <CaseStudyMobCard
              to={`/`}
              srclogo={hyderLogo}
              // span={"Riders "}
              platform={"  Hydrofarms"}
              title={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text `}
              srcImg={HyderImg}
            />
          </div>
          <div className="position-relative my-3">
            <CaseStudyMobCard
              to={`/`}
              srclogo={SportsLogo}
              // span={"Riders "}
              platform={"Sports Society"}
              title={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text `}
              srcImg={Sports}
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default CaseStydy_Mob;

import React from 'react'
import Slider from "react-slick";
import OZ from '../../assets/New/slide oz large.jpg';
import BG1 from "../../assets/New/GoldevSlider.jpg";
import Media from "../../UI/Media";
import Button from "../../UI/Button";
import Paragraph from '../../UI/Paragraph';
import SectionTitle from '../../Layout/SectionTitle';
const NextArrow = (props) => {
const {onClick} = props
return (
  <div className="btn_animation" onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="28"
      viewBox="0 0 31 28"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.4144 0.556834L30.4463 12.6557C31.1846 13.3981 31.1846 14.6019 30.4463 15.3443L18.4144 27.4432C17.676 28.1856 16.479 28.1856 15.7406 27.4432C15.0023 26.7007 15.0023 25.497 15.7406 24.7545L24.545 15.9012L0 15.9012L0 12.0988L24.545 12.0988L15.7406 3.24547C15.0023 2.50302 15.0023 1.29928 15.7406 0.556834C16.479 -0.185611 17.676 -0.185611 18.4144 0.556834Z"
        fill="#07174C"
      />
    </svg>
  </div>
);
}


const  ServiceDesigSlider = ()=> {
       const settings = {
         dots: false,
         infinite: false,
         speed: 500,
         slidesToShow: 1,
         slidesToScroll: 1,
         nextArrow: <NextArrow />,
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
             breakpoint: 600,
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
    <section className='py-5'>

      <SectionTitle sectTilte={"Related Case Studie"} />
      <div className=" slide_animation_related ">
        <Slider {...settings}>
          <div className="position-relative">
            <div className="slide_sec">
              <Media type="img" className="px-2 w-100" src={OZ} />
              <Button
                tagType="link"
                className="btn p-0 bt_study_card lightBlue3 bold-700 font-sm my-3"
                to="3"
              >
                View Case study
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="25"
                  viewBox="0 0 27 25"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.7837 1.03466L26.0968 11.4051C26.7296 12.0415 26.7296 13.0733 26.0968 13.7096L15.7837 24.0801C15.1509 24.7165 14.1248 24.7165 13.492 24.0801C12.8591 23.4437 12.8591 22.4119 13.492 21.7755L21.0386 14.1869L0 14.1869L0 10.9278L21.0386 10.9278L13.492 3.3392C12.8591 2.70282 12.8591 1.67104 13.492 1.03466C14.1248 0.398278 15.1509 0.398278 15.7837 1.03466Z"
                    fill="#07174C"
                  />
                </svg>
              </Button>
            </div>
          </div>
          <div className="position-relative">
            <div className="slide_sec">
              <Media type="img" className="px-2 w-100" src={BG1} />
              <Button
                tagType="link"
                className="btn p-0 bt_study_card lightBlue3 bold-700 font-sm my-3"
                to="3"
              >
                View Case study
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="25"
                  viewBox="0 0 27 25"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.7837 1.03466L26.0968 11.4051C26.7296 12.0415 26.7296 13.0733 26.0968 13.7096L15.7837 24.0801C15.1509 24.7165 14.1248 24.7165 13.492 24.0801C12.8591 23.4437 12.8591 22.4119 13.492 21.7755L21.0386 14.1869L0 14.1869L0 10.9278L21.0386 10.9278L13.492 3.3392C12.8591 2.70282 12.8591 1.67104 13.492 1.03466C14.1248 0.398278 15.1509 0.398278 15.7837 1.03466Z"
                    fill="#07174C"
                  />
                </svg>
              </Button>
            </div>
          </div>
          <div className="position-relative">
            <div className="slide_sec">
              <Media type="img" className="px-2 w-100" src={OZ} />
              <Button
                tagType="link"
                className="btn p-0 bt_study_card lightBlue3 bold-700 font-sm my-3"
                to="3"
              >
                View Case study
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="25"
                  viewBox="0 0 27 25"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.7837 1.03466L26.0968 11.4051C26.7296 12.0415 26.7296 13.0733 26.0968 13.7096L15.7837 24.0801C15.1509 24.7165 14.1248 24.7165 13.492 24.0801C12.8591 23.4437 12.8591 22.4119 13.492 21.7755L21.0386 14.1869L0 14.1869L0 10.9278L21.0386 10.9278L13.492 3.3392C12.8591 2.70282 12.8591 1.67104 13.492 1.03466C14.1248 0.398278 15.1509 0.398278 15.7837 1.03466Z"
                    fill="#07174C"
                  />
                </svg>
              </Button>
            </div>
          </div>
          <div className="position-relative p">
            <div className="slide_sec">
              <Media type="img" className="px-2 w-100" src={BG1} />
              <Button
                tagType="link"
                className="btn p-0 bt_study_card lightBlue3 bold-700 font-sm my-3"
                to="3"
              >
                View Case study
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="25"
                  viewBox="0 0 27 25"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.7837 1.03466L26.0968 11.4051C26.7296 12.0415 26.7296 13.0733 26.0968 13.7096L15.7837 24.0801C15.1509 24.7165 14.1248 24.7165 13.492 24.0801C12.8591 23.4437 12.8591 22.4119 13.492 21.7755L21.0386 14.1869L0 14.1869L0 10.9278L21.0386 10.9278L13.492 3.3392C12.8591 2.70282 12.8591 1.67104 13.492 1.03466C14.1248 0.398278 15.1509 0.398278 15.7837 1.03466Z"
                    fill="#07174C"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </Slider>
      </div>
    </section>
    </>
  );
}

export default ServiceDesigSlider
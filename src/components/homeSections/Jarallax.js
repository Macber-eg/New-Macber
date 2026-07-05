import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import parallax_bg from "../../assets/New/Project_home.jpg";
import Paragraph from "../../UI/Paragraph";
import { HashLink } from "react-router-hash-link";

const Jarallax = ({ target }) => {
  return (
    <>
      <ParallaxProvider>
        <ParallaxBanner
          layers={[{ image: parallax_bg, speed: -20 }]}
          className="aspect-[1]"
        >
          <div className="container parallax_bg_gradiant">
            <div className="col-12 col-lg-8 mx-auto text-center parallax_bg">
              <Paragraph className="title-white mb-4">
                Got a project in mind?Tell us about it.
              </Paragraph>
              <HashLink
                to="/contact-us#form"
                smooth
                className="lightWhite text-decoration-none btn-outline-white btn"
              >
                Contact us
              </HashLink>
            </div>
          </div>
        </ParallaxBanner>
      </ParallaxProvider>
    </>
  );
};
export default Jarallax;

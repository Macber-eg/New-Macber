import MainHeaderWrapper from '../Layout/MainHeaderWrapper';
import Supporters from './Supporters';
import KnowAbotUS from '../components/homeSections/KnowAboutUs';
import WhatWeDo from '../components/homeSections/WhatWeDo';
import Jarallax from './homeSections/Jarallax';
import Blog from '../components/homeSections/Blog';
import bg from '../assets/New/mainHeaderBackg.jpg';
import SectionHeader from '../Layout/SectionHeader';
import Mademacber from './homeSections/Mademacber';
import ExperinceMacber from './homeSections/ExperinceMacber';
import { useForm } from '../context/ContextForm';
import './homeSections/home.css';
import SupportMob from '../UI/SupportMob';
const Home = ()=>{
const FormItem = useForm()
function handleItem (e){
  FormItem.handleForm(e.target.id)  
}
return (
  <>
  {/* <SupportMob/> */}
  {/* <Testimonials /> */}
        <div className="overflow">
          <MainHeaderWrapper bg={bg} height="54rem" animate={true}>
            <SectionHeader
            titleName='w-70'
              title={"We Design, Build & Scale Digital Solutions That Transform Businesses"}
              desc={
                "Macber is a global technology partner enabling digital transformation across MENA and beyond through agile teams, intelligent automation, and immersive event technologies."
              }
              to="/contact-us/project#form"
              callToActionOne={"Build with Precision"}
              onClickOne={handleItem}
              idOne={"Build_product"}
              callToActionTwo={"Partner for Growth"}
              onClickTwo={handleItem}
              idTwo={"Build_Team"}
              to2="/contact-us/team#form"
            />
          </MainHeaderWrapper>
        </div>
        <Supporters padding={"py-5"} hr={true} />
        <KnowAbotUS />
        <WhatWeDo />
        <Mademacber />
        <ExperinceMacber />
        <Blog />
        <Jarallax />
      </>
    );
}
export default Home;
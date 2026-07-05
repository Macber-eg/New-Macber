import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';
import './App.css';
import { createBrowserRouter, RouterProvider , HashRouter } from 'react-router-dom';
import RootLayout from './Layout/RootLayout';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import OurWork from './components/OurWork';
import Careers from './components/Careers';
import CareerDetails from './components/Career/CareerDetails';
import Error from './Layout/404';
import AnimatedCursor from "react-animated-cursor";
import { motion, useScroll, useSpring } from "framer-motion";
import ServiceDesign from './components/serviceSection/ServiceDesign';
import Login from './Admin/Auth/Login';
import AdminLayout from './Admin/Auth/AdminLayout';
import Instght from './components/Instght';
import ProjectDetails from './components/ProjectDetails';
import DetailsCard from './components/homeSections/DetailsCard';
import DetalsCardInt from './components/insights/DetalsCardInt';
import Contact_us from './components/serviceSection/Contact_us';
import TypeForm from './components/FormSteps/TypeForm';
import FormTeam from './components/FormSteps/FormTeam';
import FormProject from './components/FormSteps/FormProject';
// import SignUp from './components/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "services/:id", element: <ServiceDesign /> },
      { path: "our-work", element: <OurWork /> },
      { path: "our-work/:id", element: <ProjectDetails /> },
      { path: "joinMacber", element: <Careers /> },
      { path: "joinMacber/:id", element: <CareerDetails /> },
      { path: "insights", element: <Instght /> },
      // { path: "signUp", element: <SignUp/> },
      { path: "signUp", element: <Error /> },
      { path: "insights/:id", element: <DetalsCardInt /> },
      {
        path: "contact-us",
        element: <Contact_us />,
        children: [
          { index: true, element: <TypeForm /> },
          { path: "project", element: <FormTeam /> },
          { path: "team", element: <FormProject /> },
          { path: "*", element: <Error /> },
        ],
      },
      { path: ":id", element: <DetailsCard /> },
      { path: "*", element: <Error /> },
    ],
  },
]);
function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      {/* <AnimatedCursor 
        innerSize={10}
        outerSize={35}
        color='16, 46, 168'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
      /> */}
      <RouterProvider router={router}/>
    </>
  );
}

export default App;

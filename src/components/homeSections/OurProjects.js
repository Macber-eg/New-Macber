import  { useState, useEffect } from 'react';
import Paragraph from '../../UI/Paragraph';
import SectionTitle from '../../Layout/SectionTitle';
import Button from '../../UI/Button';
import riders from '../../assets/riders.svg';
import royal from '../../assets/royal.svg';
import hpo from '../../assets/hpo.svg';
import oz_bg from '../../assets/BGAbout_vid.svg';
import classes from'./OurProjects.module.css';
import BackGroundLight from '../../Layout/BackGroundLight';
const OurProjects = ()=>{
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showCircle, setShowCircle] = useState(true);
  const [showImage, setShowImage] = useState(true);

  const handleScroll = () => {
    const projectsSection = document.getElementById('ourProjects');
    const windowHeight = window.innerHeight;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Calculate the scroll progress relative to the projects section
    const sectionTop = projectsSection.offsetTop;
    const sectionHeight = projectsSection.offsetHeight;
    const scrollProgress = (scrollPosition - sectionTop) / sectionHeight;
    const sectionBottom = sectionTop + sectionHeight;

    // Update the current image index based on the scroll progress
    const numImages = images.length;
    const newIndex = Math.floor(scrollProgress * numImages);

    setCurrentImageIndex(newIndex);

    // Update the circle visibility based on the scroll progress
    const isScrollWithinSection = scrollPosition >= sectionTop && scrollPosition <= sectionBottom;

    setShowCircle(isScrollWithinSection);
    setShowImage(isScrollWithinSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  
  const images = [
      {img: oz_bg, color:'#07174C',backgroundColor: '#fff'},
      {img: hpo, color:'#936AFF',backgroundColor: '#fff'},
      {img: royal, color:'#1582CC',backgroundColor: '#fff'},
      {img: riders, color:'#2b48c1',backgroundColor: '#fff'},  
  ];
  const getImageByIndex = (index) => {
    if (index >= 0 && index < images.length) {
      return images[index];
    }
    return '';
  };
    return (
        <BackGroundLight backgroundColor={getImageByIndex(currentImageIndex).backgroundColor || images[0].backgroundColor}>
          <div className='container py_5'>
            <SectionTitle sectTilte = {'Projects we have done'} hr={true} />
            <div className={classes.grid_container}>
              <div className={classes.our_projects} id='ourProjects'>
                  <section className={classes.section_desktop}>
                    <div className={classes.project_info}>
                      <Paragraph className='label'>Flutter</Paragraph>
                      <Paragraph className='text-black bold-700'>Oz Platform</Paragraph>
                      <Paragraph className='desc-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</Paragraph>
                      <Paragraph className='desc-black'>Duis cursus, mi quis iverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</Paragraph>
                      <Paragraph className='text-black bold-500 font-sm'>UX/UI Design , Mobile Development</Paragraph>
                      <Button className='btn-blue btn-scale' tagType ='link'>View Project</Button>
                    </div>
                  </section>
                  <section className={classes.section_desktop}>
                    <div className={classes.project_info}>
                      <Paragraph className='label'>HOP</Paragraph>
                      <Paragraph className='text-black bold-700'>HOP Platform</Paragraph>
                      <Paragraph className='desc-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</Paragraph>
                      <Paragraph className='desc-black'>Duis cursus, mi quis iverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</Paragraph>
                      <Paragraph className='text-black bold-500 font-sm'>UX/UI Design , Mobile Development</Paragraph>
                      <Button className='btn-blue btn-scale' tagType ='link'>View Project</Button>
                    </div>
                  </section>
                  <section className={classes.section_desktop}>
                    <div className={classes.project_info}>
                      <Paragraph className='label'>Royal</Paragraph>
                      <Paragraph className='text-black bold-700'>Royal Platform</Paragraph>
                      <Paragraph className='desc-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</Paragraph>
                      <Paragraph className='desc-black'>Duis cursus, mi quis iverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</Paragraph>
                      <Paragraph className='text-black bold-500 font-sm'>UX/UI Design , Mobile Development</Paragraph>
                      <Button className='btn-blue btn-scale' tagType ='link'>View Project</Button>
                    </div>
                  </section>
                  <section className={classes.section_desktop}>
                    <div className={classes.project_info}>
                      <Paragraph className='label'>Riders</Paragraph>
                      <Paragraph className='text-black bold-700'>Riders Platform</Paragraph>
                      <Paragraph className='desc-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</Paragraph>
                      <Paragraph className='desc-black'>Duis cursus, mi quis iverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</Paragraph>
                      <Paragraph className='text-black bold-500 font-sm'>UX/UI Design , Mobile Development</Paragraph>
                      <Button className='btn-blue btn-scale' tagType ='link'>View Project</Button>
                    </div>
                  </section>
                  <div className={classes.project_style}>
                    <div className={classes.project_layout}>
                      <div className={classes.img_container}>
                        <img 
                          src={getImageByIndex(currentImageIndex).img || images[0].img} 
                          className={`${classes.current_img} ${showImage ? classes.img_gone : ''}`}
                          key={currentImageIndex}
                          loading='lazy'
                          alt='projectsMacberDoneImage'
                          />
                      </div>
                      <span 
                        className={`${classes.circle_bg} ${showCircle  ? classes.animate_circle : ''}`} 
                        id='circle_bg'
                        key={currentImageIndex}
                        style={{backgroundColor: getImageByIndex(currentImageIndex).color || images[0].color}}>
                      </span>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </BackGroundLight>
    )
}
export default OurProjects;
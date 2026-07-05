import Paragraph from "../../UI/Paragraph";
import SectionTitle from "../../Layout/SectionTitle";
import BackGroundLight from "../../Layout/BackGroundLight";

const products = [
  {
    name: "Macber Studio",
    subtitle: "Custom-Built Software Solutions",
    description:
      "Studio delivers tailored software and automation solutions—designed to solve complex problems, boost efficiency, and drive digital innovation.",
    items: [
      "Web & Mobile App Development",
      "AI Development & Intelligent Automation",
      "SaaS Platforms & System Architecture",
      "UX/UI Design",
    ],
  },
  {
    name: "Macber Amplify",
    subtitle: "Agile Talent, Deployed at Scale",
    description:
      "Scale your capabilities with dedicated engineers, agile squads, and domain experts who integrate seamlessly with your in-house teams. Amplify helps you accelerate product delivery while maintaining quality and control.",
    items: [
      "Dedicated development teams",
      "On-demand staff augmentation",
      "Agile squads aligned to your roadmap",
    ],
  },
  {
    name: "Macber Stage",
    subtitle: "Technology That Powers Exceptional Events",
    description:
      "Stage is our event technology suite, built to streamline operations and elevate the attendee experience with robust infrastructure and immersive digital interactions.",
    items: [
      "Event Registration Platform",
      "Event Operations & On-Site Support",
      "Interactive AR/VR & Experiential Tech",
    ],
  },
];

const WhatWeDo = () => {
  return (
    <section className="py-5">
      <BackGroundLight className="backGround_light">
        <div className="container py_5">
          <SectionTitle sectTilte={"What We Do"} />
          <div className="row g-4 py-4">
            {products.map((product) => (
              <div className="col-lg-4 col-md-6 col-12" key={product.name}>
                <Paragraph className="title-dark bold-500 mb-2">
                  {product.name}
                </Paragraph>
                <Paragraph className="darkBlue font-sm bold-500 mb-3">
                  {product.subtitle}
                </Paragraph>
                <Paragraph className="desc-black t_just mb-3">
                  {product.description}
                </Paragraph>
                <ul className="desc-black t_just ps-3">
                  {product.items.map((item) => (
                    <li key={item} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </BackGroundLight>
    </section>
  );
};

export default WhatWeDo;

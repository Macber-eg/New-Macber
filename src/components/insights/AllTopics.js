import React from 'react';
import Card from '../../UI/Card';
import { useState } from 'react';
import { CardsIn } from '../../data/BlogsData';
import SectionTitle from '../../Layout/SectionTitle';
const AllTopics = ()=> {
  const [activeTab, setActiveTab] = useState('All');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <SectionTitle sectTilte={" All topics"} />
      {/* <ul className="d-flex list-unstyled  btn_all_topics pt-xl-5">
        <li
          onClick={() => handleTabClick("All")}
          className={activeTab === "All" ? "all_topics activity" : "all_topics"}
        >
          All
        </li>
        <li
          onClick={() => handleTabClick("Strategy")}
          className={
            activeTab === "Strategy" ? "all_topics activity" : "all_topics"
          }
        >
          Product
        </li>
        <li
          onClick={() => handleTabClick("Design")}
          className={
            activeTab === "Design" ? "all_topics activity" : "all_topics"
          }
        >
          Design
        </li>
        <li
          onClick={() => handleTabClick("Game")}
          className={
            activeTab === "Game" ? "all_topics activity" : "all_topics"
          }
        >
          Commerce
        </li>
        <div></div>
      </ul> */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {CardsIn.map((card, index) => {
          return (
            <div className="col py-5" key={index}>
              <Card
                id={card.id}
                className={"p-0 blog_card"}
                image={card.img}
                imgWidth="100%"
                imgHeight="100%"
                mainTitle={card.title}
                titleStyle={"text-black bold-500 font-sm"}
                desc={card.desc}
                descStyle={"desc-black"}
                link={"Continue reading"}
                to={`/insights/${card.id}`}
                linkColor={"lightBlue3"}
                linkStyle={"linkHover d-flex"}
                arrowColor={"#07174C"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllTopics
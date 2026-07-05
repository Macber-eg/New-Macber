import React from "react";
import { Link } from "react-router-dom";
import Paragraph from "./Paragraph";
import Button from "./Button";
const BigCard = (props) => {
  return (
    <>
      <div className="position-relative py-xl-4 py-2 wow animate__animated animate__fadeInLeft animate__delay">
        <Link to={props.to}>
          <img src={props.src} alt={props.alt} type="img" className="w-100 border-radus-32" />
        </Link>
        <Paragraph className=" made-text">{props.desc}</Paragraph>
        <div className="py-3">
          <Button tagType="linkCard" to={props.toBtn}>
            View Case study
            <svg
              className="mx-2"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="20"
              viewBox="0 0 27 25"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.7837 1.03466L26.0968 11.4051C26.7296 12.0415 26.7296 13.0733 26.0968 13.7096L15.7837 24.0801C15.1509 24.7165 14.1248 24.7165 13.492 24.0801C12.8591 23.4437 12.8591 22.4119 13.492 21.7755L21.0386 14.1869L0 14.1869L0 10.9278L21.0386 10.9278L13.492 3.3392C12.8591 2.70282 12.8591 1.67104 13.492 1.03466C14.1248 0.398278 15.1509 0.398278 15.7837 1.03466Z"
                fill="#07174C"
              ></path>
            </svg>
          </Button>
        </div>
      </div>
    </>
  );
};
export default BigCard;

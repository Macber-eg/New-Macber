import Media from "./Media";
import './CardManger.css'; 
import Paragraph from "./Paragraph";
import { useState } from "react";

const CardManger = (props)=>{
    return (
        <>
            <div className={`card ${props.className} align-items-center`}>
                <Media 
                    type={'img'} 
                    className={`card-img rounded-0 ${props.img_special}`} 
                    src={props.src} 
                    alt={`${props.src}`}
                    // width={`${props.width}`} 
                    // height={`${props.height}`}
                />
            
                <div className={`${props.overlay}`}>
                    <Paragraph className={`title-blue font-xs bold-500`}>{props.person.name}</Paragraph>
                    <Paragraph className={`desc-black mb-0`}>{props.person.position}</Paragraph>
                    <div className="team-member-more">
                        <Paragraph className='desc_sm'>{props.person.info}</Paragraph>
                        <div className="social-media">
                            <span className="small-caption">Get connected:</span>
                            <div className={`d-flex  align-items-center mt-4`}>
                                <a href={props.person.socialLinks.linkedin} target="_blank" title="linkedin" className="social_link pe-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.1825 4C4.52962 4 4 4.5135 4 5.14612V18.8543C4 19.4869 4.52969 20 5.1825 20H18.8175C19.4706 20 20 19.4869 20 18.8541V5.14612C20 4.5135 19.4706 4 18.8175 4H5.1825ZM8.86212 10.1867V17.3899H6.46787V10.1867H8.86212ZM9.01993 7.95899C9.01993 8.65024 8.50024 9.20337 7.66549 9.20337L7.6498 9.20331C6.84624 9.20331 6.32674 8.65018 6.32674 7.95893C6.32674 7.25199 6.86193 6.71431 7.68137 6.71431C8.50024 6.71431 9.0043 7.25199 9.01993 7.95899ZM12.5814 17.3899H10.1874C10.1874 17.3899 10.2187 10.8627 10.1875 10.1869H12.5816V11.2065C12.8999 10.7158 13.4695 10.0178 14.7394 10.0178C16.3146 10.0178 17.4956 11.0474 17.4956 13.2598V17.3899H15.1016V13.5368C15.1016 12.5684 14.7549 11.9079 13.8888 11.9079C13.2272 11.9079 12.8333 12.3533 12.6603 12.7836C12.5971 12.9372 12.5814 13.1527 12.5814 13.3677V17.3899Z" fill="#07174C"/>
                                    </svg>
                                </a>
                             
                            </div>
                        </div>
                    </div>
                </div> 

             
                  
            </div>
        </>
    )
}
export default CardManger;
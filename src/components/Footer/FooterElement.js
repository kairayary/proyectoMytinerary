
import styled from "styled-components";



export const FooterContainer = styled.div`
 background-color: #ba9dcc;
 display: flex;
 flex-direction: row;
 justify-content: center;
 aling-items: center;
 margin-top: 10px;
`;

export const FooterLinksContainer = styled.div`
 width: 100%;
 max-width:100%;
 display: flex;
 justify-content: space-around;
 flex-wrap: wrap;


 @media scree and (max-width: 820px) {
    padding-top: 32px;
 }
`;

export const FooterLinksWrapper = styled.div`
 display:flex;

 @media scree and (max-width: 820px) {
    flex-direction: column;
 }
`;

export const FooterLinksItems = styled.div`
 display: flex;
 flex-direction: column;
 aling-items: center;
 margin: 16px;
 text-align: letf;
 width: 160px;
 box-sizing. border-box;
 color: #23394d;
 font-size: 15px;


 @media screen and (max-width: 420px){
     margin: 0;
     padding: 10px;
     width: 100%;

 }
`;

export const FooterLinkTitle = styled.h3`
 margin-bottom: 16px;
 
`;

 export const FooterLink = styled.div`
 color: #d2691e;
 text-decoration: none;
 margin-bottom: 0.5rem;

 &: hover{
     color: #0467fb;
     trasition: 0.3s ease-out;

 }
 `;

 export const SocialMedia = styled.section`
 max-width: 1000px
 width: 100%;
 `;

 export const SocialMediaWrap = styled.div`
 display: flex;
 justify-content:space-between;
 align-items:center;
 width: 90%;
 max-width: 1000px;
 margin: 10px auto 0 auto;

 @media screen and (max-width: 820px){
     flex-direction: column;
 }
 `;

 export const SocialLogo = styled.div`
 color: #d2691e;
 justify-self: start;
 cursor: pointer;
 text-decoration: none;
 font-size: 2rem;
 display: flex;
 aling-items:center;
 margin-bottom:20px,
 
 `;

 export const SocialIcons = styled.div`
 display: flex;
 justify-contet: space-between !important;
 align-items: center;
 width: 240px;
 
 `;

 export const SocialIconLink = styled.div`
 color: #d2691e;
 font-size: 24px;
 display: flex;
 justify-content: space-between;
 padding: 1em .2em 1em .2em;
 `;

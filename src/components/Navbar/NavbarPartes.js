import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
 height: 58px;
 background-color: #ba9dcc;
 

`;

export const Cover = styled.div`
 width: 100%;
 max-width: 1400px;
 height: 100%;
 display: flex;
 flex-wrap: wrap;
 justify-content: space-between;
 margin: auto;
`;

export const LogoNavbar = styled.div`
 margin-left: 3.5rem;
 display: flex;
 align-items: center;
 font-size: 1.2rem;
 fontfamily: 'Dancing Script', cursive !import;

 svg {
     fill: #d2691e;
     margin-rigth: 0.5rem; 
 }
`;

export const Menu = styled.ul`
 height:100%;
 display: flex;
 justify-content: space-between;
 list-style: none;

 @media screen and (max-width: 960px){
     background-color: #ba9dcc;
     position: absolute;
     top: 70px;
     left: ${({open})=> open ? "0" : "-100%"};
     width: 100%;
     heigth: 90vh;
     justify-content: center;
     flex-direction: column;
     align-items: center;
     transition: 0.5s all ease;
 }
`;

export const MenuItem = styled.li`
 heigth: 100%;

 @media screen and (max-widt: 960px) {
 width: 100%;
 heigth: 70px;
 display: flex;
 justif-content: center;
 aling-items: center;
 }
`;

export const ItemLink = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100%;
 padding: 0.5rem 2.5rem;
 color: #23394d;
 font-family: 'Festive', cursive;!important;
 font-size: 1rem;
 font-weight: 300;
 cursor: pointer;
 transition: 0.5s all ease;

 &: hover{
     color: #fff;
     background-color: #e0792a;
     transition: 0.5s all ease;
 }

 @media screen and (max-widt: 960px){
     width:100%;
 }

`;

export const MobileIcon= styled.div`
 display: none;

 @media screen and (max-width: 960px) {
 display: flex;
 align-items: center;
 cursor: pointer;

 }

 svg{
     fill: #e07924;
     margin-rigth: 0.5rem;
 }
`;
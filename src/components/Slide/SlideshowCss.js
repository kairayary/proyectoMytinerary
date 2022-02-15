import styled from "styled-components";


export const ContainerSlide = styled.div`
 position: relative;
`;

export const ContainerSlideshow = styled.div`
 display: flex;
 flex-wrap: nowrap;
`;

export const Slide = styled.div`
 min-width: 100%;
 overflow: hidden;
 transition: .3s ease all;
 z-index:9;
 position: relative;

 img{
     width:100%;
     vertical-align: top;
 }
 
 `;

export const TextoSlide = styled.div`
 background: ${props => props.colorFondo ? props.colorFondo : 'rgba(0, 0, 0, .3)'};
 color:${props => props.colorTexto ? props.colorTexto : '#fff'};
 width: 100%;
 padding: 10px 60px;
 text-align: center;
 position: absolute;
 bottom: 0;

 @media screen and (maxx-width: 700px){
     position: relative;
     background: #000;
 }
`;

export const Controls = styled.div`
 position: absolute;
 top: 0;
 z-index: 18;
 width: 100%;
 height: 100%;
 pointer-events: none;
`;

export const Boton = styled.button`
 pointer-events: all;
 background: none;
 border: none;
 cursor: pointer;
 outline: none;
 width: 50px;
 height: 100%;
 text-align: center;
 position: absolute;
 transition: .3s ease all;

 &: hover{
     background: rgba(0, 0, 0, .2);

     path{
         fill:#fff;
     }
 }

 path {
     filter: ${props => props.derecho ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow( 2px 0px 0px #fff)'}

 }

 ${props => props.derecho ? 'right: 0': 'left: 0'}
`;
 
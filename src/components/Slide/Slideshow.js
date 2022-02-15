import React, {useRef, useEffect} from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { ContainerSlide, ContainerSlideshow, Slide, TextoSlide,Controls, Boton } from "./SlideshowCss";


const Slideshow = () => {

    const slideshow = useRef(null);

//referencia para crear una variable q recuerda q no se actualice con cada renderizado
    const intervalSlideshow = useRef(null);


    const Upcoming = () =>{
        //compruebo que el slide tiene elementos
        if ( slideshow.current.children.length > 0) {

            //obtengo el primer elemento del slideshow
            const firtsElement = slideshow.current.children[0];

            // Estblece la transición
            slideshow.current.style.transition = `300ms ease-out all`;

            const sizeSlideshow = slideshow.current.children[0].offsetWidth;

            //Mover el Slideshow
            slideshow.current.style.transform = `translateX(-${sizeSlideshow}px)`;

            const transition = () => {
                //Reiniciamos la posición del slidesow
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`;

                //tomamos el primer elemento y lo enviamos al final
                slideshow.current.appendChild(firtsElement);

                slideshow.current.removeEventListener('transitionend', transition);

            }
           //Eventlistener para cuando termina la animación
           slideshow.current.addEventListener('transitionend', transition); 
        }
     
    }
    
    const Previous = () =>{
        console.log('Previous');
        if(slideshow.current.children.length > 0){
            //obtenemos el ultimo elemento del slideshow
            const index = slideshow.current.children.length - 1;
            const lastElement = slideshow.current.children[index];
            slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);

            slideshow.current.style.transition = 'none';

            const sizeSlideshow = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${sizeSlideshow}px)`;

            setTimeout(() => {
                slideshow.current.style.transition = '300ms ease-out all';
                slideshow.current.style.transform = `translateX(0)`;

            }, 30);



        }
    }
    // permite que las imagen corran solas
    useEffect (() =>{
        intervalSlideshow.current = setInterval(() => {
            Upcoming ();
        }, 5000);

        //Eliminar el intervalo de movimiento cuando la persona coloco el cursor
        slideshow.current.addEventListener('mouseenter', () => {
            clearInterval(intervalSlideshow.current)
        });
        // Reanudar el intervalo al quitar el cursor
        slideshow.current.addEventListener('mouseleave', () => {
            intervalSlideshow.current = setInterval(() => {
                Upcoming ();
            }, 5000);
        })
    }, []); 
   
  return (
    <ContainerSlide>
        <ContainerSlideshow ref={slideshow}>
           <Slide>
              <div>
                 <img src={require("../Imagen/China.Asia.jpg")} width={"550px"} height={"300px"}/>
              </div>
              <TextoSlide colorFondo = "" colorTexto="">
                 <p>ASIA</p>
              </TextoSlide >
           </Slide>
           <Slide>
              <div>
                 <img src={require("../Imagen/Austria.Europa.jpg")} width={"550px"} height={"300px"}/>
              </div>
              <TextoSlide>
                 <p>EUROPE</p>
              </TextoSlide>
           </Slide>
           <Slide>
              <div>
                 <img src={require("../Imagen/Canada.America.jpg")} width={"550px"} height={"300px"}/>
              </div>
              <TextoSlide>
                 <p>AMERICA</p>
              </TextoSlide>
           </Slide>
           <Slide>
              <div>
                 <img src={require("../Imagen/Tanza.Africa.jpg")} width={"550px"} height={"300px"}/>
              </div>
              <TextoSlide>
                 <p>AFRICA</p>
              </TextoSlide>
           </Slide>
           <Slide>
              <div>
                 <img src={require("../Imagen/NuevaZelanda.Oceania.jpg")} width={"550px"} height={"300px"}/>
              </div>
              <TextoSlide>
                 <p> OCEANIA</p>
              </TextoSlide>
           </Slide>
           
        </ContainerSlideshow>
        <Controls>
          <Boton onClick={Previous}>
            <FaAngleLeft />
          </Boton>

          <Boton derecho onClick={Upcoming}>
            <FaAngleRight />
          </Boton>
        </Controls>
    </ContainerSlide>
  );
};

export default Slideshow;

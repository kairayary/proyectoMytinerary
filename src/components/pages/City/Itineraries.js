import React from "react";
import "./Itineraries.css";
import Vietnam from "../../Imagen/Vietnam.jpg";
import IconoPrecio from "../../Imagen/IconoPrecio.png";
import IconoTimes from "../../Imagen/IconoTimes.png";

function Itineraries(props) {
   const itinerarios = props.itineraries

    return (
        <>
              {itinerarios.map((itin) => ( 
                <div className="centrado">
               

                    <div className="center">

                        <div className="property-card">

                            <div className="property-image"  >
                                <img src={process.env.PUBLIC_URL+`/Imagenes/Itinerary/${itin.img}`} className="property-image1" height={400} width ={500}/>
                                {/* <div className="property-image-title">
                                    
                                </div> */}
                            </div>
                            <div className="property-description">
                                <h2>{itin.city}</h2>
                                <h4>{itin.name}</h4>
                                

                            </div>

                            {/* <div className="property-social-icons">
                                   
                            </div>   */}

                        </div>
                        <div className="property-content">
                            <div className="property-text">
                                
                                <span>{itin.description}</span>
                                </div>   
                                <div className="property-texts">
                                      
                                    <div className="property-textItem">
                                        <img src={IconoPrecio} width="35px" height="35px" />
                                        <p>{itin.price}</p>
                                    </div>
                                    <div className="property-textItem">
                                    <img src={IconoTimes} width="40px" height="40px" />
                                        <p>{itin.time}</p>
                                    </div>
                                </div>
                                <div className="property-bottoms">

                                <button className="comment-btn">Comment</button>
                                <button className="likes-btn">Likes</button>
                            
                            </div>
                            
                        </div>
                    </div>
                     
                </div>
              ))}  
        </>
    )
};
export default Itineraries;
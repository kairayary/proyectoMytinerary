import "./Header.css";
import Post from "../PostHome/Post";
import viajar from "../Imagen/viajar.jpeg";
import Paris from "../Imagen/Paris.Europa.jpg"
import Suiza from "../Imagen/Suiza.Europa.jpg";
import Egipto from "../Imagen/Egipto.Africa.jpg";
import Singapur from "../Imagen/Singapur.Asia.jpg";
import Polinesia from "../Imagen/Polinesia.Oceania.jpg";
import SaoPaulo from "../Imagen/SaoPaulo.jpeg";
import { AiTwotoneLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import gifscamara from "../Imagen/gifscamara.gif"


function Header() {
  return (
    <div className="containerheader">
      <div className="header">
        <div className="headerTitles">
          <div className="headerTitleLg">
            <h1>
              MyTinerary
            </h1>
          </div>
        </div>
        <div className="headerImg">
          <div className="headerImgStyle">
            <img src={viajar} width="100%" height="500" alt="" />

          </div>
          <div className="headerComment">
            
          </div>
          <div className="headerFrase">
            <div className="headerFrase1">
              <h1>Life is not measured by the number of times we breathe, but by the places that take our breath away</h1>
            </div>
            <div className="imgFrase1"></div>
          </div>
          <div className="headerTexto">
              <div>
                <p> MyTinerary takes you to magical places, to discover mesmerizing and natural settings in the corner of the planet
                  of your choice.</p>
              </div>
              <div className="headerTextoImg">
                <img src={gifscamara} width="80%" height="280"  alt="" /> 
              </div>
            </div>
          <div className="headerTitleM">
            <p>Discover the places most recommended by our users...</p>
          </div>
        </div>
      </div>

      <div className="wrapper">

        <Post
          img={Paris}
          title="PARIS"
          description="Explore the quaint cobblestone streets, sweet pastry shops and cozy little 
          bistros that lure you in with a glass of Beaujolais. Make Paris yours. "
          likes={<AiTwotoneLike />}
          comment={<FaRegComment />} />

        <Post img={Suiza}
          title="SWISS"
          description="In the heart of Europe lies this alpine country with dreamlike landscapes.
        Its towns and cities enjoy a charm that does not conflict with modernity."
          likes={<AiTwotoneLike />}
          comment={<FaRegComment />} />

        <Post img={Singapur}
          title="SINGAPORE"
          description="This little island is a study in fusions and contrasts, you will find
          tranquil parks bordering futuristic skyscrapers and luxury shopping malls."
          likes={<AiTwotoneLike />}
          comment={<FaRegComment />} />

        <Post img={Polinesia}
          title="POLYNESIA"
          description="With 118 islands and atolls in the Pacific Ocean, it is an ideal destination for relaxation,
          enjoy its beaches and do water activities."
          likes={<AiTwotoneLike />}
          comment={<FaRegComment />} />
        {
          <Post img={SaoPaulo}
            title="SAO PAULO"
            description="One of the most important cities in Brazil, with a spectacular climate that
          let enjoy any of its beautiful beaches and tourist attractions. "
            likes={<AiTwotoneLike />}
            comment={<FaRegComment />} />
        }

        <Post img={Egipto}
          title="EGYPTO"
          description="Where the word Pharaonic is not an adjective. The fascinating story of one of the
          more acentral civilizations is present throughout its territory."
          likes={<AiTwotoneLike />}
          comment={<FaRegComment />} />

      </div>
    </div>
  );
}
export default Header;

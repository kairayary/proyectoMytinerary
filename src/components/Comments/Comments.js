import React, { useState, useEffect } from "react"
import { useStateValue } from "../../StateProvider";
import axios from "axios";
import "./Comments.css"
import { FaTrashAlt } from "react-icons/fa";
import { MdCreate } from "react-icons/md";
import { Avatar } from "@material-ui/core"
import swal from 'sweetalert';

function Comment(props) {

  const [comment, setComment] = useState()// creacion de constante para ser seteada
  const [{ user }, dispatch] = useStateValue()
  const [reload, setReload] = useState(false)// esto es un recargador de datos ya que el setcomment de post carga el comentario pero no se actualiza

  const [cambio, setCambio] = useState()


  const submitComment = async (event) => {

    event.preventDefault()//evita el refrescar de la páginay se puede obtener los datos


    const dataComments = {

      itinerario: props.itinerario,//props.itinerario viene des itineraries.js
      mensaje: event.target[0].value,
      user: user.id //para traer los datos de usuario, tiene el nombre como lo puse en reducer


    }
    // console.log(dataComments)

    await axios.post("http://localhost:4000/api/comments", { dataComments })
      .then(response =>
        setComment(response.data.response.comentario))
    setReload(!reload)
    // console.log(response)
  }
  useEffect(() => {
    let id = props.itinerario

    axios.get(`http://localhost:4000/api/comments/${id}`)
      .then(response => {
        setComment(response.data.response.comentario)

      })
    // console.log(comment)
  }, [reload])


  const borrarComentario = async (id) => {

    await axios.delete(`http://localhost:4000/api/comments/${id}`)
      .then(response => {
        swal({
          text: response.data.message,
          buttons: "ok",
        })

      })
    setReload(!reload)

  }
  const handleChange = (event) => {
    setCambio(event.target.value)

  }
  const modificar = async (id) => {//en el controllers se hizo modificarComentario

    console.log(id)
    console.log(cambio)
    let data = cambio
    await axios.put(`http://localhost:4000/api/comments/${id}`, { data })
      .then(response => {
        // console.log(response) 
        swal({
          text: response.data.message,
          buttons: "ok",

        })
      })
    setReload(!reload)

  }
  console.log(comment)
  console.log(user)

  return (
    <>

      <div className="contentComment">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              COMMENTS
            </button>
          </h2>

          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            {comment?.map(comm =>
              <div class="accordion-body">
                <div className="AquiVaEstilo mb-2" >
                  <div className="commentUserImg">
                    <img></img>
                    <p>{comm.user.firstname}</p>
                  </div>
                  {user?.id===comm.user._id?
                    <div>
                      <div className="commentText">
                        {/* event entra como parámetro del onChange y pasa como parámetro a la función y pasa hacia arriba */}
                        <input onKeyUp={handleChange} defaultValue={comm.comment} className="styleInput"></input>
                      </div>
                      <div className="btnComment">
                        {/* captura el comentario por cada boton q se genera se pasa el id a la funcion y la funcion pasa el parametro al controlador y este la ejecuta */}
                        <button className="btn btn-primary mx-2" onClick={() => borrarComentario(comm._id)}><FaTrashAlt /></button>
                        <button className="btn btn-primary" onClick={() => modificar(comm._id)}><MdCreate /></button>
                      </div>
                    </div>:
                    <div className="commentText">
                   
                    <div className="styleInput">{comm.comment}</div>
                  </div>
                  }
                </div>


              </div>
            )}
            {user?
            <div>
            <form onSubmit={submitComment} className="p-3">
              <textarea name="textarea" placeholder="Write us..." className="itineraryTextarea">

              </textarea>
              <div className="btn-comentario-form">
                <button type="submit" className="btn btn-primary">Send</button>
              </div>
            </form>
            </div>
            :
            <h6 className="p-3">You must login to comment</h6>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
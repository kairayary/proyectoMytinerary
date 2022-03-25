import React, { useState, useEffect } from "react"
import { useStateValue } from "../../StateProvider";
import axios from "axios";
import "./Comments.css"
import {FaTrashAlt} from "react-icons/fa";
import { MdCreate } from "react-icons/md";
import { Avatar } from "@material-ui/core"

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
      user: user.datosUser.id //para traer los datos de usuario, tiene el nombre como lo puse en reducer


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
    console.log(comment)
  }, [reload])


  const borrarComentario = (id) => {

    axios.delete(`http://localhost:4000/api/comments/${id}`)
    setReload(!reload)

  }
  const handleChange = (event) => {
    setCambio(event.target.value)

  }
  const modificar = (id) => {//en el controllers se hizo modificarComentario

    console.log(id)
    console.log(cambio)
    let data = cambio
    axios.put(`http://localhost:4000/api/comments/${id}`, { data })
      .then(response => { console.log(response) })
    setReload(!reload)

  }

  return (
    <>

      <div className="contentComment">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Accordion Item #1
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
                  <div className="commentText">
                    {/* event entra como parámetro del onChange y pasa como parámetro a la función y pasa hacia arriba */}
                    <input onKeyUp={handleChange} defaultValue={comm.comment} className="styleInput"></input>
                  </div>
                  {/* captura el comentario por cada boton q se genera se pasa el id a la funcion y la funcion pasa el parametro al controlador y este la ejecuta */}
                  <button className="btn btn-primary mx-2" onClick={() => borrarComentario(comm._id)}><FaTrashAlt/></button>
                  <button className="btn btn-primary" onClick={() => modificar(comm._id)}><MdCreate/></button>
                </div>

              </div>
            )}
            <form onSubmit={submitComment} className="p-3">
              <textarea name="textarea" placeholder="Write us..." className="itineraryTextarea">

              </textarea>
              <div className="btn-comentario-form">
                <button type="submit" className="btn btn-primary">Send</button>
              </div>
            </form>


          </div>



        </div>






      </div>

      {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Comments
        </button> */}

      {/* <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel"> Comment Your Experience</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form >
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label"><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  </label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div> */}
      {/* <textarea name="textarea" placeholder="Write us..." className="itineraryTextarea">
             <p></p>
          </textarea> */}

      {/* </form>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-secondary" data-bs-dismiss="modal">Send<i className="fa fa-paper-plane"></i></button>
              <button type="button" class="btn btn-primary">Delete</button>
            </div>
          </div>
        </div>
      </div> */}
      {/* prueba de todo */}

      {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Comments
        </button> */}

      {/* <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
         <div className="modal-dialog"> 
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel"> Comment Your Experience</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            {comment?.map(comm =>
              <div className="deAquiFiltro">
                <div className="commentUserImg">
                  <img></img>
                  <p>{comm.user.firstname}</p>
                </div>
                <div class="modal-body">

                  <div className="commentText">

                    <input onKeyUp={handleChange} defaultValue={comm.comment}></input>
                  </div>
                </div>
                <button className="btn btn-primary mx-2" onClick={() => borrarComentario(comm._id)}>Delete</button>
                  <button className="btn btn-primary" onClick={() => modificar(comm._id)}>Edit</button>

                </div>  
              )}

                <form onSubmit={submitComment}>
                  <textarea name="textarea" placeholder="Write us..." className="form-control" rows="3">
                    <p></p>
                  </textarea>
                  <div className="btn-comentario-form">
                    <button type="submit" className="btn btn-primary">Send</button>
                  </div>
                </form>
              
          </div>
        </div>
        </div>  */}

    </>
  );
};

export default Comment;
import React, { useState, useEffect } from "react"
import { useStateValue } from "../../StateProvider";
import axios from "axios";
import { Avatar } from "@material-ui/core"

function Comment(props) {

  const [comment, setComment] = useState()// creacion de constante para ser seteada
  const [{ user }, dispatch] = useStateValue()
  const [reload, setReload] = useState(false)// esto es un recargador de datos ya que el setcomment de post carga el comentario pero no se actualiza
  
  const[cambio,setCambio] = useState()
  
  
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
  const handleChange=(event)=>{
   setCambio(event.target.value)

  }
  const modificar=( id)=>{//en el controllers se hizo modificarComentario
    
    console.log(id)
    console.log(cambio)
    let data=cambio
    axios.put(`http://localhost:4000/api/comments/${id}`,{data})
    .then(response=>{console.log(response)})
    setReload(!reload)
   
  }

  return (
    <>

      <div className="contentComment">
        {comment?.map(comm =>
          <div className="AquiVaEstilo">
            <div className="commentUserImg">
              <img></img>
              <p>{comm.user.firstname}</p>
            </div>
            <div className="commentText">
              {/* event entra como parámetro del onChange y pasa como parámetro a la función y pasa hacia arriba */}
              <input  onKeyUp={handleChange} defaultValue={comm.comment}></input>
            </div>
            {/* captura el comentario por cada boton q se genera se pasa el id a la funcion y la funcion pasa el parametro al controlador y este la ejecuta */}
            <button className="btn btn-primary mx-2" onClick={() => borrarComentario(comm._id)}>Delete</button>
            <button className="btn btn-primary"  onClick={()=>modificar(comm._id)}>Edit</button>
          </div>


        )}
        <form onSubmit={submitComment}>
          <textarea name="textarea" placeholder="Write us..." className="itineraryTextarea">
            <p></p>
          </textarea>
          <div className="btn-comentario-form">
            <button type="submit" className="btn btn-primary">Send</button>
          </div>
        </form>

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
              <form>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label"><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  </label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div> */}
        {/* <textarea name="textarea" placeholder="Write us..." className="itineray-textarea">

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

      </div>

    </>
  );
};

export default Comment;
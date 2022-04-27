import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FcLike,FcDislike } from "react-icons/fc";
import React, { useState } from 'react';
import { useStateValue } from "../../StateProvider";
import axios from 'axios';

function Likes(props) {//estas props las traigo de itineraries que tengo el lamdo de likes

    const [{ user}, dispatch] = useStateValue()
    const [like, setLike] = useState(props.likes); //contador
    console.log(props)

    const likeDislike= async()=>{
        const token = localStorage.getItem("token") 
        console.log(user)
     //se busca el user porque cuando porque cuando se carga el token hace un dispatch con el id del usuario, y traemos pou useStateValue al user
        await axios.put(`https://kairamytinerary.herokuapp.com/api/likesDislike/${props.id}`,{},{
            headers: {
    
              "Authorization": "Bearer " +token//método de autorización estandar q permite autenticar y autorizar al usuario
            }
          })
        .then(response=>
            setLike(response.data.response)
            )
    }
    const Ilike = like?.includes(user?.id)?<FcLike/>:<FcDislike/>
    return (
        <>
            <div className='contentLikes'>
             
               {user?
                <div className="iLike">
                    <Button variant="outlined" onClick={likeDislike} color="primary" size="large">
                        {Ilike}
                    </Button>
                    
                    <span>{like?.length}</span>
                </div>
                :
                <div className="iLike">
                    <div variant="outlined" onClick={likeDislike} color="primary" size="large">
                        {Ilike}
                    </div>
                    <span>{like?.length}</span>
                </div>

                }
            </div>
        </>

    )

};
export default Likes;
import React from "react";
import { actionType } from "../../reducer";
import { useStateValue } from "../../StateProvider";
import "../SearchInput/Search.css";
import Switch from '@mui/material/Switch';




function Search() {
  const [filtro,setFiltro]= React.useState("Select the City");
  const [checked, setChecked]= React.useState(true);

  const handleChange =(event)=>{
    setChecked(event.target.checked);
    event.target.checked ? setFiltro(" Select the City"): setFiltro("Select the Continent")
  }

  const [{ cities }, dispatch] = useStateValue()
  
  
  
  const searchInput = (event) => {

    dispatch({
      type: actionType.FILTER,
      // value: event.target.value
      value:{value:event.target.value, filterBy:filtro}
    })
  };

  

  return (
    <>


      <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="titlepage text-center">
            <h2>{filtro}</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="text-center">
            <Switch checked={checked} 
            onChange={handleChange} 
            inputProps={{'aria-label':'controlled'}}/>
            </div>
        </div>


        <div class="search_wrap search_wrap_1">
          <form>
            <div class="search_box">
              {/* <input type="text" className="input" placeholder="Search..." /> */}
              <input type="text" onChange={searchInput} className="input" placeholder="Search..." />
              <div class="btn btn_common">
                <i class="fas fa-search"></i>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Search;

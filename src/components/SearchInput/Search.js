import React from "react";
import { actionType } from "../../reducer";
import { useStateValue } from "../../StateProvider";
import "../SearchInput/Search.css";

function Search() {
  const [{ cities }, dispatch] = useStateValue()
  const imputSearch = (event) => {

    dispatch({
      type: actionType.FILTER,
      value: event.target.value
    })
  }
  return (
    <div className="container">
      <div class="search_wrap search_wrap_1">
        <form>
          <div class="search_box">
            <input type="text" className="input" placeholder="Search..." />
            <input type="text" onChange={imputSearch} className="input" placeholder="Search..."/>
            <div class="btn btn_common">
              <i class="fas fa-search"></i>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;

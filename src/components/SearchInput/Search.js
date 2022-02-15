import React from "react";
import "./Search.css";

function Search() {
  return (
    <div className="container">
      <div class="search_wrap search_wrap_1">
        <div class="search_box">
          <input type="text" class="input" placeholder="filter under construction.." />
          <div class="btn btn_common">
            <i class="fas fa-search"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;

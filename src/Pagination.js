import React from "react";
import { useGlobalContext } from "./context";

const Pagination = () => {
  // return <div>Welcome to the Tech News Website  ans Pagination here</div>
  const{page,nbPages,getPrevPage,getNextPage} = useGlobalContext(); //to get/import their values
  // pagination 1 button text then again ek button
  return <> 
  <div className="pagination-btn">  
    <button onClick={()=>getPrevPage()}>PREV</button>
    <p>{page+1}of{nbPages}</p>
    <button onClick={()=>getNextPage()}>NEXT</button>
  </div>
  </>
};

export default Pagination;
import React from "react";
import { useGlobalContext } from "./context";
// import { useGlobalContext } from "./context";

const Search = () => {
  const {query,searchPost} = useGlobalContext();  //imported the query in this
  // const name = useGlobalContext(); // fetch the data from context.js and display below
  // return <div>Welcome to the Tech News Website  ans Search</div>
  return<>
    <div>
      <h1>
        Tech News Website
        <form>
          <div>
            <input type="text" placeholder="search here"
            value={query}
            onChange={(e)=>searchPost(e.target.value)}   //update search result with any/each change in the box
            // called a funt pass the argument use/pass funt in global contex
            />
          </div>
        </form>
      </h1>
    </div>
  </>;
};

export default Search;
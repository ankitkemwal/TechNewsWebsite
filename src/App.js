import React from "react";
import Search from "./Search";
import Pagination from "./Pagination";
import Stories from "./Stories";
import "./App.css";
// import { useContext } from "react";
// import { AppContext } from "./context";  created custom hook below so no need of them
// import { useGlobalContext } from "./context";

const App = () => {
  // const data = useContext(AppContext);   now call using custom hook
  // const data = useGlobalContext();
  return (
      <>
      {/* <div>Welcome to the Tech News Website which is made using React</div>  */}
      <Search />
      <Pagination />
      <Stories />
      </>
  );
};

export default App;

const reducer = (state, action) => {  //pass 2 parameters in reducer / dispatch trigger qaction method

    switch (action.type) {   //better alternative of nested if else statements
      case "SET_LOADING":
        return {
          ...state,
          isLoading: true,
        };
      case "GET_STORIES":   //for this input give this output
        return {
          ...state,   //return prev data /keep original state/previou data keep as it is
          isLoading: false,
          hits: action.payload.hits,    //update hits annd no of pages
          nbPages: action.payload.nbPages,
        };
      case "REMOVE_POST":
        return {
          ...state,  //previous state as it is
          hits: state.hits.filter(    //cant write directly hits amd using filter method
            (curElem) => curElem.objectID !== action.payload    //check obj id to each object's id : if match then except this return all other 
          ),
        };
      case "SEARCH_QUERY":
        return {
          ...state,
          query: action.payload,
        };
  
        //defining/working of the function
      case "NEXT_PAGE":
        let pageNumInc = state.page + 1;
        //if going next to last come on first page again
        if (pageNumInc >= state.nbPages) {
          pageNumInc = 0;
        }
        return {
          ...state,
          page: pageNumInc,
        };
  
        //not go to -ve page remain on 1st only on clicking prev 
      case "PREV_PAGE":
        let pageNum = state.page - 1;
  
        if (pageNum <= 0) {
          pageNum = 0;
        }
  
        return {
          ...state,
          page: pageNum,
        };
      
      // // you can add the default case too
      default :
    }
    
    return state;
  };
  
  export default reducer;   //export it
// context creation     provider        consumer
import React, { useContext,useReducer, useEffect } from "react";
import reducer from "./reducer";    //import reducer file here

let API = "https://hn.algolia.com/api/v1/search?";

// initialising our hook variables
const initialState = {  //set the initial stage of all the variables
 isLoading: true,
 query: "",      //query word written here can be fetched below now
 nbPages: 0,
 page: 0,
 hits: [], //empty array
};

// const AppContext = React.createContext();

const AppContext = React.createContext();
//takes care of providing/transportation of the data
const AppProvider = ({children}) =>{    
    //it returns an array  with 2 elements stored in state and dispatch
    const [state,dispatch] = useReducer(reducer, initialState);
 
    // let API = "https://hn.algolia.com/api/v1/search?query=html";


    // calling the function to fetch data from API
    const fetchAPIdata = async (url) => { //bcoz when fetching data from api it returns us promise so use async to handle it
        dispatch({type : "SET_LOADING"});
        try{        //try and catch block if we encountered any error
            const res = await fetch(url);   //bcoz api data fetching takes time so wait
            const data = await res.json();  // now this fetched data can't be read by the system so we need to convert it and wait for it
            console.log(data); 
            // isLoading = false;   instead of this we will use context api
            dispatch({      //used to add data to hits array to use it
                type : "GET_STORIES",       //type of operation to perform
                payload:{       //to share extra info
                    hits:data.hits,     //these are just variables to be passed to action method
                    nbPages:data.nbPages,
                },
            });
        }
        catch(error){
                console.log(error);
        }
        
    };

    // to remove any post
    const removePost = (post_ID) =>{
        dispatch({type:"REMOVE_POST",payload:post_ID});         //remove the post with this id call in reducer
    };

    // search function
    const searchPost=(searchQuery)=>{
        dispatch({type:"SEARCH_QUERY",  //funt definition pass the value to switch in index .html
        payload : searchQuery,
    });
    };

    // pagination function
    const getNextPage = ()=>{       //define and diapatched to reducer.js
        dispatch({
            type:"NEXT_PAGE",

        });
    };
    const getPrevPage = ()=>{
        dispatch({
            type:"PREV_PAGE",
            
        });
    };


    useEffect(() =>{    //calling any funct w/o clicking on search button
        // use backtick in API/template liberals and import query which is present in initial state 
        // again use & to define page no too 
        fetchAPIdata(`${API}query=${state.query}&page=${state.page}`);      //now somehow pass this data to hits array to show user
    }, [state.query, state.page]); 
    // since we have passed array dependency here so it will run only once
    // whenever we have change in input show output using state array

    //application's all data is included here
    return (
        //provider has hold the all data / ...state : as we are going to pass so many objects
        <AppContext.Provider value={{...state,removePost,searchPost,getNextPage,getPrevPage}}> 
            {children}          
        </AppContext.Provider>
    );
};

//creating our own custom hook 
const useGlobalContext = () => {
    return useContext(AppContext);
}
export{AppContext,AppProvider,useGlobalContext};
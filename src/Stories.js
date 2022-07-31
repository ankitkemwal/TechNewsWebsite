import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
// now we can esily import fetched data use custom made api

const Stories = () => {
    const {hits,isLoading,nbPages,removePost} = useGlobalContext();
    // let isLoading = true;

    
    if(isLoading) {
        return (
        <>
            <h1>Loading...</h1>
        </>
        );
    }

    return (
        <>
          <div className="stories-div">
            {hits.map((curPost) => {
              const { title, author, objectID, url, num_comments } = curPost; //extract all these item from curPost and use them directly
              return (      //pass key prop ko avoid warning ie always unique
                <div className="card" key={objectID}> 
                  <h2>{title}</h2>      
                  <p>
                    By <span> {author}</span> | <span> {num_comments} </span>
                    comments
                  </p>
                  <div className="card-button">     
                    <a href={url} target="_blank">  
                      Read More 
                    </a> 
                    <a href="#" onClick={() => removePost(objectID)}>  
                      Remove
                    </a> 
                  </div>
                </div>
              );
            })}
          </div>
        </>
      );
    };

//     return (
//         <>
//         <h2>My Tech News Post</h2>
//         {hits.map((curPost) => {
//             return <h2>
//                 {curPost.title}     
//             </h2>
//         })}
//     </>
//     );
// };

export default Stories;
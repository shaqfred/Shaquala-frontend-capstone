import React from "react";
import { useEffect, useState } from "react";
 import axios from "axios"
 import { Link } from "react-router-dom";
 import "../journalsIndex/journals.css"




const API = import.meta.env.VITE_APP_API_URL

export default function journals(){



    const [allJournals, setAllJournals]= useState([])


    function getAlljournals(){
        axios.get(`${API}/journalss`)
        .then(response=> setAllJournals(response.data))
        .catch(error => console.log(error))
    }
    useEffect(()=>{
        getAlljournals()
    
    },[])
     
    return(
        <div className="column">
          
           
            <h1>Browse Entries</h1>
          
            { 
                allJournals.map((journalsObj)=>{
                    return(
                        
                        <Link to={`/journals/${journalsObj.id}`}>
                          
                            <div className='card-column'>
                                {/* <>{journalsObj.journal_entry}</> */}
                                 
                            <div className="">Mood: {journalsObj.journal_mood}</div>
                            <div className=""> Date: {journalsObj.entry_date}</div>
                            {/* <span>{journalsObj.journal_affirmation}</span> */}
                           
                            </div> 
                        </Link>
                    )
                })
            }
        </div>
    )
}

import React from "react";
import { useEffect, useState } from "react";
 import axios from "axios"
 import { Link } from "react-router-dom";


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
        <div className="journals">
            
            <h2>Browse Entries</h2>
            {
                allJournals.map((journalsObj)=>{
                    return(
                        <Link to={`/journals/${journalsObj.id}`}>
                            <div className="card">
                                <h3>{journalsObj.journal_entry}</h3>
                            </div>
                            <span>{journalsObj.journal_mood}</span>
                            <span>{journalsObj.journal_affirmation}</span>
                            
                        </Link>
                    )
                })
            }
        </div>
    )
}

import React from "react";
import { useEffect, useState } from "react";
 import axios from "axios"
 import { Link } from "react-router-dom";

const API = import.meta.env.VITE_APP_API_URL

export default function JournalsIndex(){



    const [allJournals, setAllJournal]= useState([])


    function getAllJournals(){
        axios.get(`${API}/journals`)
        .then(response=> setAllJournal(response.data))
        .catch(error => console.log(error))
    }
    useEffect(()=>{
        getAllJournals()
    
    },[])
    console.log(allJournals)
    return(
        <div className="JournalsIndex">
            <h1> Journals-Index</h1>
            <h2>Browse Journals</h2>
            {
                allJournals.map((journalsObj)=>{
                    return(
                        <Link to={`/journals/${journalsObj.id}`}>
                            <div className="card">
                                <h3>{journalsObj.journalEntry}</h3>
                            </div>
                            <span>{journalsObj.journalMood}</span>
                            <span>{journalsObj.journalAffirmation}</span>
                            
                        </Link>
                    )
                })
            }
        </div>
    )
}

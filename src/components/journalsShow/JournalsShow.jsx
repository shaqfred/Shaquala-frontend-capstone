import React from "react";
import {Link, useParams, useNavigate} from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";
import "../journalsShow/journalShow.css"


const API= import.meta.env.VITE_APP_API_URL



export default function journalsShow(){

    const [journalDetails, setJournalDetails] = useState({})

    const {id} = useParams()

    const navigate =useNavigate()

    function handleDelete (){
        axios.delete(`${API}/journalss/${id}`)
        .then (response => navigate(`/journals`))
        .catch (error => console.log (error))
    }

    useEffect(()=>{
        axios.get(`${API}/journalss/${id}`)
        .then (response => setJournalDetails(response.data))
        .catch(error => console.log(error))

    },[id])

    return(
        <div className='card'>
          <span>{journalDetails.journal_mood}</span>
            <h2>{journalDetails.journal_entry}</h2>
          <span>{journalDetails.journal_affirmations}</span>

            <span className="journalsShow_buttons">
                <Link to={`/journals/${id}/edit`}>Edit</Link></span> 
                <button onClick={()=> handleDelete()}>Delete</button> 
                         
        </div>
    )
}


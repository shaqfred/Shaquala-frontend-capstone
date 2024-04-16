import React from "react";
import { useParams, useNavigate} from "react-router-dom"
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
        <div className='card-column'>
      
          <div className=""> Mood: {journalDetails.journal_mood}</div>
      
            <div className=""> Entry: {journalDetails.journal_entry}</div>
            <div className="">

            <div className=""> Date: {journalDetails.entry_date}</div>
            </div>
          {/* <span>{journalDetails.journal_affirmations}</span> */}


           

            <div className="button">
                <button onClick={()=> navigate(`/journals/${id}/edit`)}>Edit</button></div> 
                <button onClick={()=> handleDelete()}>Delete</button> 
                         
        </div>
    )
}


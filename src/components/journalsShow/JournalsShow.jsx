import React from "react";
import {Link, useParams, useNavigate} from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";


const API= import.meta.env.VITE_APP_API_URL



export default function journalsShow(){

    const [journalDetails, setJournalDetails] = useState({})

    const {id} = useParams()



    function handleDelete (){
        axios.delete(`${API}/journalss/${id}`)
        .then (response => Navigate(`/journals`))
        .catch (error => console.log (error))
    }

    useEffect(()=>{
        axios.get(`${API}/journalss/${id}`)
        .then (response => setJournalDetails(response.data))
        .catch(error => console.log(error))

    },[id])

    return(
        <div>
            <h1>Journals Show Page</h1>
        </div>
    )
}


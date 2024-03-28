import React from "react";
import {Link,useParams, useNavigate} from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";





export default function JournalsShow(){

    const [journalDetails, setJournalDetails] = useState({})

    function handleDelete (){
        axios.delete(`${API}/Journalss/${id}`)
        .then (response => Navigate(`/Journalss`))
        .catch (error => console.log (error))
    }
    return(
        <div>
            <h1>Journals Show Page</h1>
        </div>
    )
}


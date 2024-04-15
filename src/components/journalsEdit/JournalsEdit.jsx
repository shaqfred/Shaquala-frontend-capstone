import React from 'react';
import { useState,useEffect } from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import axios from "axios"
import Search from '../searchEntries/Search';


const API = import.meta.env.VITE_APP_API_URL

export default function EditForm() {
    const [editForm, setEditForm] = useState({
        journal_entry: "",
        journal_mood: "",
        // journal_affirmation: "",
        
        
    })
    const  navigate = useNavigate()

    function handleTextInput (event){
        const id = event.target.id;
        const value = event.target.value


        setEditForm({
         journal_entry: editForm.journal_entry,
         journal_mood: editForm.journal_mood,
        //  journal_affirmation: editForm.journal_affirmation,

        [id]: value 

              })
        
         }
    
 const {id} = useParams()
// const id = useParams().id

useEffect(()=>{
    axios.get(`${API}/journalss/${id}`)
    .then(response=> setEditForm(response.data))
    .catch(err=> console.log(err))
},[id])



function handleSubmit(event){
    event.preventDefault()

    axios.put(`${API}/journalss/${id}`, editForm)
    .then(response => navigate(`/journals/${id}`))
    .catch(err=> console.log(err))


}

    return (
        <form className='card-column'
        onSubmit={(event)=> handleSubmit(event)}>
            <label> Entry:
                <input
                type="textarea"
                id="journal_entry"
                value={editForm.journal_entry}
                onChange={(event)=> handleTextInput(event)}
                />
            </label>
             <label>Mood:
                <input
                type="text"
                id="journal_mood"
                value={editForm.journal_mood}
                onChange={(event)=>handleTextInput(event)}/>
            </label> 
            {/* <label>Affirmation:
                <input
                type="text"
                id="journal_affirmation"
                value={editForm.journal_affirmation}
                onChange={(event)=>handleTextInput(event)}/>
            </label> */}
              
            <div className='editForm-button-container'>
            <button type='submit' className='editForm-button'>Edit Changes</button>
             
           </div>
            
            

            
        </form>
    );










    }

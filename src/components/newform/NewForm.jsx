import React from 'react';
import { useState } from 'react';
import {   useNavigate} from 'react-router-dom';
import axios from "axios"

export default function NewForm() {

const API = import.meta.env.VITE_APP_API_URL

 const [form, setForm] = useState({
        journal_entry: "",
        journal_mood: "",
        journal_affirmation: ""
        
    })
    
    function handleTextChange (event){
        const id = event.target.id;
        const value = event.target.value
       setForm ({
              
            journal_entry: form.journal_entry,
            journal_mood: form.journal_mood,
            journal_affirmation: form.journal_affirmation,
             [id]: value            
        
        }
    )
        
    }
    
    function handleSubmit(event){
        event.preventDefault()

        const navigate= useNavigate()

    axios.post(`${API}/journalss/`,form)
    .then(response => navigate(`/journals/${response.data}`))
    .catch(err=> console.log(err))
       
    } 
    
return(
    
<form className='new-form'
     
      onSubmit={handleSubmit}>
        <h1>New Journal</h1>
            <label> journal_entry:
                <input
                type="text"
                id="number"
                value={form.journal_entry}
                onChange={(event)=> handleTextChange(event)}
                />
            </label>
            <select>journal_mood:
                <input
                type="text"
                id="number"
                value={form.journal_mood}
                onChange={(event)=>handleTextChange(event)}/>
                <option value="">-- Choose--</option>
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="nonchalant">Nonchalant</option>
            <option value="angry">Angry</option>
            <option value="cringed">Cringed</option>
            <option value="surprised">Surprised</option>
            <option value="overwhelmed">Overwhelmed</option>
            <option value="great">Great</option>
            <option value="awesome">Awesome</option>
            <option value="nervous">Nervous</option>
             
            </select>
            <label>journal_affirmation:
                <input
                type="text"
                id="number"
                value={form.journal_affirmation}
                onChange={(event)=>handleTextChange(event)}/>
            </label>

           <div className='form-button-container'>
            <button type='submit'className='form-button'>Submit</button>
           </div>
           
            
        </form>
    
    
     

)}
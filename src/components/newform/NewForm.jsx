import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from "axios"
import "./NewForm.css"

export default function NewForm() {

const API = import.meta.env.VITE_APP_API_URL

 const [form, setForm] = useState({
        journal_entry: "",
        journal_mood: "",
        journal_affirmation: "",
        entry_date:"",
          
    })
    const navigate= useNavigate()
    
    function handleTextChange (event){
        const id = event.target.id;
        const value = event.target.value
      console.log(value,id,form)
        setForm ({
             ...form,
             [event.target.id]: value         
        
        }
    )
        
    }

    function handleSubmit(event){
        event.preventDefault()

       

    axios.post(`${API}/journalss/`,form)
    .then(response => navigate(`/journals/${response.data.id}`))
    .catch(err=> console.log(err))
    }    
    // <div className="container mt-5"></div>
    // <div className='row'></div>
    // <div className='col-md-6 offset-md-3'></div>
    // <div className='card'></div>
    // <div className='card-header'></div>
  
return(
    
<form className='card'
     
      onSubmit={ handleSubmit}
     
     >
        <h2>New Entry</h2>
            <label> 
                
                journal_entry:
                <input
                type="text area"
                id="journal_entry"rows ="5"
                value={form.journal_entry}
                onChange={(event)=> handleTextChange(event)}
                />
            </label>
            <label>
                journal_mood:
            <select id="journal_mood" 
            onChange={(event)=> handleTextChange(event)}
            >
                {/* <input
                type="text"
                id="number"
                value={form.journal_mood}
                 onChange={(event)=>handleTextChange(event)}/> */}
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
            </label>
            <label>
                journal_affirmation:
                <input
                type="text"
                id="journal_affirmation"
                value={form.journal_affirmation}
                onChange={(event)=>handleTextChange(event)}/>
            </label>
            <label>
                entry_date:
                <input
                type='date'
                id='entry_date'
                value={form.entry_date}
                onChange={(event)=>handleTextChange(event)}/>
            </label>

           

           <div className='form-button-container'>
            <button type='submit' className='form-button'>New Entry</button>
             
           </div>
          
           {/* <input
          
           type="submit"
            value="New Journal"/> */}
            
        </form>
    
    
     

)
}
import React from 'react';
import { useState,useEffect } from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import axios from "axios"



const API = import.meta.env.VITE_APP_API_URL

export default function EditForm() {
    const [editForm, setEditForm] = useState({
        journal_mood: "",
        journal_entry: "",
         journal_affirmation: "",
        
        
    })
    const navigate =useNavigate()

    function handleTextInput (event){
        const id = event.target.id;
        const value = event.target.value


        setEditForm({
         journal_entry: editForm.journal_entry,
         journal_mood: editForm.journal_mood,
         journal_affirmation: editForm.journal_affirmation,

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
        <form className='edit-card'
        onSubmit={(event)=> handleSubmit(event)}>
             <label>Mood:<select  id="journal_mood" 
            onChange={(e)=> handleTextInput(e)}>
                {/* { <input 
                type="text"
                id="journal_mood"
                value={editForm.journal_mood}
                onChange={(event)=>handleTextInput(event)}/> */}
                
                 <option value="">--Choose--
                 </option>
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
            <option value="sick">Sick</option>
            <option value="relieved">Relieved</option> 
            <option value="confused">Confused</option>
            </select>
            </label> 
            <label>Entry:
                <textarea
                type="textarea"
                id="journal_entry"
                value={editForm.journal_entry}
                onChange={(event)=> handleTextInput(event)}
                />
            </label>
           
            {/* <label>Affirmation:
                <input
                type="text"
                id="journal_affirmation"
                value={editForm.journal_affirmation}
                onChange={(event)=>handleTextInput(event)}/>
            </label> */}
              
            <div className='button'>
            <button type='submit'className='button'>Edit</button>
             
           </div>
            
            

            
        </form>
    );










    }

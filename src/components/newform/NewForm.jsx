import React from 'react';
import { useState, } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from "axios"
import "./NewForm.css"


export default function NewForm() {

const API = import.meta.env.VITE_APP_API_URL
const [mood, setMood] = useState('');
const [affirmation, setAffirmation] = useState('');


 const [form, setForm] = useState({
    
        journal_entry: "",
        journal_mood: "",
        journal_affirmation: "",
        entry_date: "",
        })
            
            
        
    const navigate= useNavigate()
    
    function handleTextChange (e){
        const id = e.target.id;
        const value = e.target.value
      console.log(value,id,form)
        setForm ({
             ...form,
             [e.target.id]: value         
        
        }
        )
    }   
    
    const handleMoodChange = (e) => {
        setMood (e.target.value);
    
    }
    function handleSubmit(e){
        e.preventDefault()

        const affirmations = {
            happy: ['I am joyful and grateful.', 'I radiate positivity and light.'],
            sad: ['I embrace my emotions with kindness.', 'I choose to find peace within.'],
            nonchalant: ['I nourish myself with kind words, and joyful foods.'],
            angry:['I do not have to linger in dark places; there is help for me here'],
            cringed: ['I am worthy of investing in myself'],
            surprised: ['I look forward to tomorrow and the opportunities that await me.'],
            overwhelmed: ['My life is not a race or a competition.'],
            great: ['Everything happens in my favor to all situations in life'],
            nervous: ['I am worthy and I know that it will get better.'],
            awesome: ['I have a beautiful and peaceful home.'],
            sick:['My body is worthy of being cared for and adorned in beautiful garments.'],
            relieved: ['My body is beutiful in this present moment and at its current size.'],
            relaxed: ['It feels good to know I am loved and I feel loved.'],
            
                 // Add more affirmations for different moods
        };
        const randomAffirmation = affirmations[mood][Math.floor(Math.random() * affirmations[mood].length)];
        window.alert(`${randomAffirmation}`)
        // setAffirmation(randomAffirmation);

        axios.post(`${API}/journalss/`,form)
        .then(response => navigate(`/journals/${response.data.id}`))
        .catch(err=> console.log(err))
           
    };

    

   
 

return(
    <div>
<form className='card-column'

onSubmit={handleSubmit}>
     
     
       
            
            
            <label>
            Mood:
            <select id="journal_mood" 
            onChange={(e)=> handleMoodChange(e)}
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
            <option value="sick">Sick</option>
            <option value="relieved">Relieved</option> 
            <option value="confused">Confused</option>
            </select>
            </label>
           

      
<label>

Entry:   
<textarea
 
id="journal_entry" 
value={form.journal_entry} 
onChange={(e)=>handleTextChange(e)}/>
</label>
{/* <label>Date:
    <input
    id="entry_date" 
    value={form.entry_date}
    onChange={(e)=>handleTextChange(e)}/>

   
</label> */}
        
            
               
               
                 {affirmation && <p>Journalfly: {affirmation}</p>} 
                
                
          
            


           <div className='form-button-container'>
            <button type='submit' className='form-button'>New Entry</button>
             
           </div>
          
           {/* <input
          
           type="submit"
            value="New Journal"/> */}
            
        </form>


  </div> 
    
)
        }               

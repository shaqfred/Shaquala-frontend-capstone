// import React,{ useState } from "react";
// import "../searchEntry/Search.css"
// //  import { searchForWorkspaceFolder } from "vite";

// function Search(){
//     const [entry_date, setEntry_Date] = useState('');
//     const [journal_mood, setJournal_Mood] = useState('');

//     const handleSearch = ()=> {
//          console.log ('Selected entry_date:', entry_date);
//          console.log ('Selected journal_mood:', journal_mood);
//     }
//     return(
//         <div className="card-column">
//             <input
//             type="date"
//             placeholder="Search-by-date"
//             value={entry_date.entry_date}
//             onChange={(e)=>setEntry_Date(e.target.value)}/>
            
//             <select 
//             value={journal_mood.journal_mood}
//             onChange={(e)=>setJournal_Mood(e.target.value)}>
//                 <option value=""
                
//                 select>Select Mood</option>
//                 <option value="happy">Happy</option>
//             <option value="sad">Sad</option>
//             <option value="nonchalant">Nonchalant</option>
//             <option value="angry">Angry</option>
//             <option value="cringed">Cringed</option>
//             <option value="surprised">Surprised</option>
//             <option value="overwhelmed">Overwhelmed</option>
//             <option value="great">Great</option>
//             <option value="awesome">Awesome</option>
//             <option value="nervous">Nervous</option>
//             <option value="sick">Sick</option>
//             <option value="relieved">Relieved</option> 
//             <option value="confused">Confused</option>
//  </select>
//  <button onClick={handleSearch}>Search</button>
//         </div>
//     )
// }
// export default Search

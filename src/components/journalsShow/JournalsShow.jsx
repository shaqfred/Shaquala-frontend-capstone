import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../journalsShow/journalShow.css";

const API = import.meta.env.VITE_APP_API_URL;

export default function journalsShow() {
  const [journalDetails, setJournalDetails] = useState({});

  const { id } = useParams();

  const navigate = useNavigate();

  function handleDelete() {
    axios
      .delete(`${API}/journalss/${id}`)
      .then((response) => navigate(`/journals`))
      .catch((error) => console.log(error));
  }
  function getformatDate(formattedDate) {
    console.log(formattedDate);
    return formattedDate.slice(0, 10);
  }

  useEffect(() => {
    axios
      .get(`${API}/journalss/${id}`)
      .then((response) => setJournalDetails(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    journalDetails.id && (
    
      <section className="centered">
         <div className="card_container"> 
        <div className="card_container_date">
          {" "}
          <b>Date:</b> {getformatDate(journalDetails.entry_date)}
        </div>

        <div className="card_container_mood"><b> Mood:</b> {journalDetails.journal_mood}</div>

        <div className="card_container_entry"><b>Entry:</b> {journalDetails.journal_entry}</div>

        {/* <span>{journalDetails.journal_affirmations}</span>   */}

        <div className="card_container_button">
          <button onClick={() => navigate(`/journals/${id}/edit`)}>Edit</button>
          <button onClick={() => handleDelete()}>Delete</button>
        </div>

        
        </div>
      </section>
    )
  );
}

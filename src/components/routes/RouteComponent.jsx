import {Routes, Route} from "react-router-dom"
import Home from "../../pages/Home.jsx"
import New from "../../pages/New.jsx"
import Show from "../../pages/Show.jsx"
import Error from "../../pages/Error.jsx"
import Journals from "../../pages/Journals.jsx"
import About from "../../pages/About.jsx"
import Edit from "../../pages/Edit.jsx"

import { Navigate } from "react-router-dom"

export default function RouteComponent (){
    return(
        <Routes>
            <Route path="/" element= {<Home />}/>
            <Route path="/journals" element={<Journals />}/>
            <Route path="/journalsshow/:id" element={<Show/>}/>
            <Route path="/journals/new" element={<New/>}/>
            <Route path="/journals/:id/edit" element={<Edit />}/>
            <Route path="/journals/not-found" element={<Error />}/>
            <Route path="/journals/about" element={<About/>}/>
            <Route path="*" element={<Navigate to ="/journals/not-found"/>}/>
            <Route path="/journals/scrap" element={<Navigate to = "/journals/:id/edit"/>}/>

        </Routes>

    )
}
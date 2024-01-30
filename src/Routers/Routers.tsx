import { Routes, Route } from "react-router-dom";
import Players from "../components/Players";
import Home from "../components/Home";
import Clasification from "../components/Clasification";
import Round from "../components/Round";
import Teams from "../components/Teams";
import Login from "../components/Login";
import Header from "../components/Header";

export default function Routers() {

    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="clasification" element={<Clasification />} />
                <Route path="round" element={<Round />} />
                <Route path="teams" element={ <Teams /> } />
                <Route path="players" element={ <Players /> } />
                <Route path="login" element={ <Login /> } />
            </Routes>
        </div>
    )
}
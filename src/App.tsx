import React from "react";
import TabsComponent from './components/TabsComponent'
import './App.css'

function App() {

  return (
    <main>
      {/* <Router> */}
      <h1 className="text-5xl">TUKI LEAGUE</h1>
      <TabsComponent/>
        {/* <Routes>
          <Route path="/" element={<Navigate to="/clasification" />} />
          <Route path="/clasification" element={<Clasification/>}/>
          <Route path="/round" element={<Round/>}/>
          <Route path="/teams" element={<Teams/>}/>
          <Route path="/teams" element={<Teams/>}/>
          <Route path="/players" element={<Players/>}/>
        </Routes> */}
      {/* </Router> */}
    </main>
  )
}

export default App

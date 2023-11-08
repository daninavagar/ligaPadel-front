import Clasification from './components/Clasification'
import Round from './components/Round'
import { Tabs,Tab } from '@nextui-org/tabs'
import Header from './components/Header'
import './App.css'

function App() {

  return (
    <main>
      <Header />
      <br />
      <Tabs>
        <Tab title='Clasificación'><Clasification/></Tab>
        <Tab title='Jornadas'><Round/></Tab>
      </Tabs>
    </main>
  )
}

export default App

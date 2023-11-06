import Clasification from './components/Clasification'
import Round from './components/Round'
import { Tabs,Tab } from '@nextui-org/tabs'
import './App.css'

function App() {

  return (
    <main>
      <h1 className='text-5xl'>Liga de Padel</h1>
      <br />
      <Tabs>
        <Tab title='Clasificación'><Clasification/></Tab>
        <Tab title='Jornadas'><Round/></Tab>
      </Tabs>
    </main>
  )
}

export default App

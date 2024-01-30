import './App.css'
import { AuthContextProvider } from './context/AuthContext';
import Routers from "./Routers/Routers";

export default function App() {

  return (
    <main>
    <AuthContextProvider>
      <Routers/>
    </AuthContextProvider>
    </main>
        
  );
}

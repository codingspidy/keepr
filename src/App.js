import './App.css';
import Home from './pages/Home';
import { NoteContextProvider } from './context/NoteContextProvider';

function App() {
  return (
    <NoteContextProvider>
       <Home />
    </NoteContextProvider>
  );
}

export default App;

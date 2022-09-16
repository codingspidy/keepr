import './App.css';
import Home from './components/Home';
import { NoteContextProvider } from './context/NoteContextProvider';

function App() {
  return (
    <NoteContextProvider>
       <Home />
    </NoteContextProvider>
  );
}

export default App;

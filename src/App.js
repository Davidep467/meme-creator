import InsertData from './components/InsertData';
import Meme from './components/Meme';
import HeaderBar from './components/HeaderBar';
import './App.css';

function App() {
   
  // nei beatles sistemare il +/- come nell'addbox qui, è giusto ceh ci siano così  tante cose per ogni box?
  return (
<div>
      <HeaderBar />
      <div id="container">
      <InsertData />
      <Meme />
    </div>
    </div>
  );
}

export default App;

import InsertData from './components/InsertData';
import Meme from './components/Meme';
import HeaderBar from './components/HeaderBar';
import './App.css';

function App() {
   

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

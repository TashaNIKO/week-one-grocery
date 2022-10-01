
import image from './grocery.jpeg';
import List from './List';

import './App.css';
import GroceryImage from './GroceryImage';

function App() {
  function showHi() {
    alert ("Hi");
  }
  const showBye=()=> {
    alert ("Bye");
  }
  return (
    <div >
      
        <img src={image}  alt="grocery" width="300px"/>
        <List />
    <GroceryImage/>
     <button onClick={showHi}>BUTTON1</button>
     <button onClick={showBye}>BUTTON2</button>
    </div>
  );
  

}

export default App;

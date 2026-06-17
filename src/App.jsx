import Counter from './counter.jsx';
import Batsman from './Batsman.jsx';
import './App.css'

function App() {
  
function handleClick(){
  alert('I am clicked');
}
  return (
    <>
    

      <h3> Vite + React</h3>
      {/* <button onClick='handleClick()'> Click Me</button> */}
      <button onClick={handleClick}> Click Me</button>

      <Batsman></Batsman>

      <Counter></Counter>
    </>
  )
}

export default App

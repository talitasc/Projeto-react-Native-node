import React,{useState} from 'react';
import  Header from  './Header';
import  Logon from  './pages/Logon/index';
import './global.css';
import Routes from './routes';

function App() {
 
  return (
    <Routes/>
  );
}

/*function App() {
  //useState muda o estado, valor da variavél
  // deve-se sempre declarar uma variavel que muda de estado setCount e a varivavel que muda valor
  let [count,setCount] = useState(0);
  // retorna um array [valor,função de atualização]

  function increment(){
    setCount(count++);
    
  }
  return (
    <div>
    <Header>Contador: {count}</Header>
    <button onClick = {increment}>incrementar</button>
    </div>
  );
}*/

export default App;

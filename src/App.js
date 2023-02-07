import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
const name = 'Zaheer';

function App() {
  return (
    <div className='App'>
      <Header name={name}/>
      <h1>React Bolte</h1>
      <Counter/>
    </div>
  );
}

export default App;

import './App.css';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './component/Card';
import CardDetails from './component/CardDetails';
import  {Routes, Route} from 'react-router-dom'




function App() {
  return (
    <div>
       <Header />
       <Routes>
        <Route  path='/' element={<Card />}/>
        <Route  path='/cart/:id' element={<CardDetails />}/>
       </Routes>
    </div>
  );
}

export default App;

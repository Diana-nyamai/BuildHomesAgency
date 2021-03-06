import './App.css';
import NavBar from './pages/Navigators/NavBar';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import HomePage from './pages/Homepage/HomePage';
import { BackTop } from 'antd';

const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: 'black',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};

function App() {
  return (
    <Router>
    <div className="App" style={{ height: '600vh', padding: 8 }}>
    <NavBar/>
     <Route path='/' component={HomePage}/>
     <BackTop>
     <div style={style}>UP</div>
   </BackTop>
    </div>
    </Router>
    
  );
}

export default App;

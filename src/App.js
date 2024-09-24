import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <Router>      
        <HeaderComponent/>  
        <div className="container">
          <Routes>
            <Route exact path="/" Component={ListEmployeeComponent}></Route>
            <Route path="/employees" Component={ListEmployeeComponent}></Route>      
            <Route path="/add-employee" Component={AddEmployeeComponent}></Route> 
          </Routes>
        </div>
        <FooterComponent/>          
    </Router>
  );
}

export default App;

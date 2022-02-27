import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import Balance from './components/Balance';
import AllData from './components/AllData';
import UserContext from './components/Context';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Navbar/>
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/balance" element={<Balance />} />
            <Route path="/alldata" element={<AllData />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

export default App;

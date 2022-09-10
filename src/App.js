
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home></Home>}> </Route>
          <Route exact path="/adduser" element={<AddUser></AddUser>}></Route>
          <Route exact path="/edituser/:id" element={<EditUser></EditUser>}></Route>
          <Route exact path="/viewuser/:id" element={<ViewUser></ViewUser>}></Route>
        </Routes>

      </Router>


    </div>
  );
}

export default App;

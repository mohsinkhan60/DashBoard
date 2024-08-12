import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./Pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./Pages/userList/UserList";
import User from "./components/user/User";
import NewUser from "./Pages/newUser/NewUser";

export const App = () => {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/users" element={<UserList />}/>
          <Route path="/users/:usersId" element={<User />}/>
          <Route path="/newuser" element={<NewUser />}/>
        </Routes>
      </div>
    </Router>
  );
};
export default App;

import "./App.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Admin from "./Pages/Admin";
import Nav from "./Components/Nav";
import AllRoute from "./Pages/AllRoute";
import User from "./Pages/User";

function App() {
  return (
    <div className="App">
      <Nav />
      <AllRoute />
      {/* <User /> */}
      {/* <Admin /> */}
    </div>
  );
}

export default App;

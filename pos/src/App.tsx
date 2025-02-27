import { NavLink } from "react-router";
import "./App.css";

function App() {
  return (
    <div className="">
      <div className="text-2xl text-orange-300 font-bold">
        Hello, World
      </div>
      <NavLink to="/billing" end>Billing</NavLink>
    </div>
    );
}

export default App;

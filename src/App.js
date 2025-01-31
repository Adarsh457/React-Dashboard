import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Dashboard />
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Topbar from "./components/common/molecules/Topbar";
import Sidebar from "./components/common/molecules/Sidebar";


const App = () => (
  <div className="app">
    <Sidebar/>
    <main className="content">
      <Topbar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </main>

  </div>
);

export default App;

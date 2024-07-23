import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Users from "./components/pages/Users";
import BarChart from "./components/pages/BarChart";
import PieChart from "./components/pages/PieChart";
import LineChart from "./components/pages/LineChart";
import ScatterPlot from "./components/pages/ScatterPlot";
import Radar from "./components/pages/Radar";
import Funnel from "./components/pages/Funnel";
import Topbar from "./components/common/molecules/Topbar";
import Sidebar from "./components/common/molecules/Sidebar";



const App = () => (
  <div className="app">
    <Sidebar/>
    <main className="content">
      <Topbar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/bar" element={<BarChart />} />
        <Route path="/pie" element={<PieChart />} />
        <Route path="/line" element={<LineChart />} />
        <Route path="/scatter_plot" element={<ScatterPlot />} />
        <Route path="/radar" element={<Radar />} />
        <Route path="/funnel" element={<Funnel />} />
      </Routes>
    </main>

  </div>
);

export default App;

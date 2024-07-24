import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Users from "./components/pages/Users";
import BarChart from "./components/organisms/diagrams/BarChart";
import PieChart from "./components/organisms/diagrams/PieChart";
import LineChart from "./components/organisms/diagrams/LineChart";
import ScatterPlot from "./components/organisms/diagrams/ScatterPlot";
import Radar from "./components/organisms/diagrams/Radar";
import Funnel from "./components/organisms/diagrams/Funnel";
import Topbar from "./components/molecules/Topbar";
import Sidebar from "./components/molecules/Sidebar";

import Test from "./components/pages/Test";

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
        <Route path="/test" element={<Test />} />
      </Routes>
    </main>

  </div>
);

export default App;

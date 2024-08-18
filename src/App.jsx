import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Users from "./components/pages/Users";
import BarChartPage from "./components/pages/BarChartPage";
import PieChartPage from "./components/pages/PieChartPage";
import LineChartPage from "./components/pages/LineChartPage";
import ScatterPlotPage from "./components/pages/ScatterPlotPage";
import RadarChartPage from "./components/pages/RadarChartPage";
import FunnelChartPage from "./components/pages/FunnelChartPage";
import Topbar from "./components/molecules/Topbar";
import Sidebar from "./components/molecules/Sidebar";

import Test from "./components/pages/Test";

import DateSelectComponent from "./components/molecules/DateComponent";
import Header from "./components/atoms/Header";

const App = () => (
  <div className="app">
    <Sidebar/>
    <main className="content">
      <Topbar/>
      <Header title="ダッシュボード" subtitle="Welcome to React Admin" />
      <DateSelectComponent />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/bar" element={<BarChartPage />} />
        <Route path="/pie" element={<PieChartPage />} />
        <Route path="/line" element={<LineChartPage />} />
        <Route path="/scatter_plot" element={<ScatterPlotPage />} />
        <Route path="/radar" element={<RadarChartPage />} />
        <Route path="/funnel" element={<FunnelChartPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </main>

  </div>
);

export default App;

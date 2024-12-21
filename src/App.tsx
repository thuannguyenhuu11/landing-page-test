import ChartSection from "./components/ChartSection/ChartSection";
import NavBar from "./components/NavBar/NavBar";
import StatSection from "./components/StatSection/StatSection";
import TokenSection from "./components/TokenSection/TokenSection";

function App() {
  return (
    <div className="min-h-screen pb-10 bg-black relative">
      <NavBar />
      <ChartSection />
      <StatSection />
      <TokenSection />
    </div>
  );
}

export default App;

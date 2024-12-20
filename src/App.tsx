import ChartSection from "./components/ChartSection/ChartSection";
import NavBar from "./components/NavBar/NavBar";
import TokenSection from "./components/TokenSection/TokenSection";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <NavBar />

      <ChartSection />

      <TokenSection />
    </div>
  );
}

export default App;

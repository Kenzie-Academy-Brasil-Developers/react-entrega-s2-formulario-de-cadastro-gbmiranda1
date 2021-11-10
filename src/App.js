import './App.css';
import Routes from "./routes"
import Header from "./components/header";

function App() {
  return (
    <div className="App">
          <Header/>
          <Routes></Routes>
    </div>
  );
}

export default App;

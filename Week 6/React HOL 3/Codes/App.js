import './App.css';
import { CalculateScore } from './Components/cal';


function App() {
  return (
      <div className="App">
        <CalculateScore name="Ayaan" school="Naryana High School" total={450} goal={90} />
      </div>
  );
}

export default App;

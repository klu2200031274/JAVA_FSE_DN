import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import trainersMock from './Components/trainersmock';
import TrainersList from './Components/TrainerList';
import TrainerDetail from './Components/TranierDetails';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>My Academy Trainers App</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/trainers">Show Trainers</Link>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainers" element={<TrainersList trainers={trainersMock} />} />
          <Route path="/trainer/:id" element={<TrainerDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

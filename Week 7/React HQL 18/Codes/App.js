import { CohortData } from './Components/Cohort';
import CohortDetails from './Components/CohortDetails';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>My Academy Cohort Dashboard</h2>
      <CohortDetails cohort={CohortData[0]} />
    </div>
  );
}

export default App;

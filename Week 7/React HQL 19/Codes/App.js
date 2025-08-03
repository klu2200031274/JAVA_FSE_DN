// src/App.js
import React, { useEffect, useState } from 'react';
import GitClient from './Components/GitClient';

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const repoNames = await GitClient.getRepositories('techiesyed');
      setRepos(repoNames);
    }
    fetchData();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>GitHub Repositories for techiesyed</h2>
      <ul>
        {repos.map((repo, idx) => (
          <li key={idx}>{repo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

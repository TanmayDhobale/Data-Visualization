// Example Route Configuration in App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes component
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes> 
        <Route exact path="/" element={<Dashboard />} /> 
      </Routes>
    </Router>
  );
}

export default App;

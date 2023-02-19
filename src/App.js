import './index.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/guest/MainPage';
import SignupPage from './pages/guest/SignupPage';
import SigninPage from './pages/guest/SigninPage';
import SignupContinuePage from './pages/guest/SignupContinuePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup/continue" element={<SignupContinuePage />} />
        <Route path="/signin" element={<SigninPage />} />
          
        <Route/>
      </Routes>
    </div>
  );
}

export default App;

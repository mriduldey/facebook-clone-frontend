import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/index';
import Profile from './pages/profile/index';
import Home from './pages/home/index';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} exact />
      <Route path="/profile" element={<Profile />} exact />
      <Route path="/" element={<Home />} exact />
    </Routes>
  );
}

export default App;

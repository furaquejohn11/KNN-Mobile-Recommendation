import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage"
// import Test from "./pages/Test"
import Home from './pages/Home';
import FindYourPhone from './pages/FindYourPhone';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path='/find' element={<FindYourPhone />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
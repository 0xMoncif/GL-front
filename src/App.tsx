import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage , SignUpPage,CreateAcconut} from "@components";
// test
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Sign-up" element={<SignUpPage />} />
          <Route path="/Create-Account" element={<CreateAcconut />} />
        </Routes>
      </Router>
      
    
    </>
  );
}

export default App;

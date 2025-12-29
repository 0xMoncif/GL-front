import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage, SignUpPage, CreateAcconut } from "@components";
import { RegistrationProvider } from "./contexts/RegistrationContext";
// test
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Sign-up" element={<SignUpPage />} />
          <Route
            path="/Create-Account"
            element={
              <RegistrationProvider>
                
                  <CreateAcconut />
                
              </RegistrationProvider>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

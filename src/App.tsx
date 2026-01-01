import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  LandingPage,
  SignUpPage,
  CreateStudentAcconut,
  CreateEmployerAccount,
} from "@components";
import { RegistrationProvider } from "./contexts/RegistrationContext";
import { EmployerRegistrationProvider } from "./contexts/EmployerRegistrationContext";


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
                <CreateStudentAcconut />
              </RegistrationProvider>
            }
          />
          <Route
            path="/Create-Employer-Account"
            element={
              <EmployerRegistrationProvider>
                <CreateEmployerAccount />
              </EmployerRegistrationProvider>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

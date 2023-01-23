import { Container } from "react-bootstrap";
import { AuthProvider } from "../context/AuthContext";
import Signup from "./Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashbord from "./Dashbord";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
// import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100 " style={{ maxWidth: "400px" }}>
          <BrowserRouter>
            <AuthProvider>
              <Routes>
                <Route element={<PrivateRoute />}>
                  <Route exact path="/" element={<Dashbord />} />
                  <Route exact path="/update" element={<UpdateProfile />} />
                </Route>

                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </div>
      </Container>
    </>
  );
}

export default App;

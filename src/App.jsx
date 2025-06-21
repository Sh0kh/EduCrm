import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./Components/ProtectedRoute";
import Login from "./Components/Login/Login";
import { routes } from "./Routes/routes";
import Lead from "./Components/Lead/Lead";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/lead" element={<Lead />} />

          <Route element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.component}
              />
            ))}
          </Route>
        </Route>
      </Routes >
    </Router >
  );
}

export default App;

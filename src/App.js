import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import './App.css';
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
// import Home from "./pages/Home";




function App() {
  return (

    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
    //  <h1>Hello</h1>
    // <div className="App">
    //   <h1>Hello World</h1>
    // </div>
  );
}

export default App;

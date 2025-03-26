import './index.css'; // Import the global styles
import './app.css'; // Import additional styles
import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TwoColumnLayout from "./TwoColumnLayout"; // Import the TwoColumnLayout component
import LoginForm from "./LoginForm"; // Import the LoginForm component
import { SignUpForm } from "./SignUpForm"; // Import the SignUpForm component
import Footer from "./Footer"; // Import the Footer component
import ContactStar from "./ContactStar"; // Import the ContactStar component

function App() {
  const [showLogin, setShowLogin] = React.useState(true);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleSignUpClick = () => {
    setShowLogin(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <TwoColumnLayout
            leftContent={
              showLogin ? (
                <img src="src/LoginArt.png" alt="Login Art" className="max-w-full h-auto" />
              ) : (
                <img src="src/Signup.jpg" alt="Signup Art" className="max-w-full h-auto" />
              )
            }
            rightContent={
              showLogin ? (
                <LoginForm onSignUpClick={handleSignUpClick} />
              ) : (
                <SignUpForm onLoginClick={handleLoginClick} />
              )
            }
          />
        } />
        <Route path="/contact" element={<ContactStar />} />
        <Route path="/login" element={
          <TwoColumnLayout
            leftContent={<img src="src/LoginArt.png" alt="Login Art" className="max-w-full h-auto" />}
            rightContent={<LoginForm onSignUpClick={handleSignUpClick} />}
          />
        } />
        <Route path="/signup" element={
          <TwoColumnLayout
            leftContent={<img src="src/Signup.jpg" alt="Signup Art" className="max-w-full h-auto" />}
            rightContent={<SignUpForm onLoginClick={handleLoginClick} />}
          />
        } />
      </Routes>
      <Footer /> {/* Add the Footer component */}
    </Router>
  );
}

export default App;
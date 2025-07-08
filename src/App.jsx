import Right from './home/right/Right';
import Left from './home/left/Left';
import './App.css';
import Logout from './home/left1/Logout';
import Signup from './components/Signup';
import Login from './components/Login';
import { useAuth } from './Context/Authprovider';
import toast, { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  const { authuser, setauthuser } = useAuth();
  console.log(authuser);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            authuser ? (
              <div className="flex h-screen">
                <Logout />
                <Left />
                <Right />
              </div>
            ) : (
              <Navigate to={"/login"}/>
            )
          }
        />
        <Route
          path="/login"
          element={authuser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authuser ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>
      <Toaster/>
    </>
  );
}

export default App;

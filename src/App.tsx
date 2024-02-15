import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import {createContext, useEffect, useState} from 'react';
import ReactSwitch from 'react-switch';
import Home from './views/Home';
import Profile from './views/Profile';
import Single from './views/Single';
import Upload from './views/Upload';
import Layout from './views/Layout';
import Login from './views/Login';
import Logout from './views/Logout';
import {UserProvider} from './contexts/UserContext';
import ProtectedRoute from './components/ProtectedRoute';
import Example from './components/Example';
import './index.css';

export const ThemeContext: any = createContext(null);

const App = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = window.localStorage.getItem('theme');
    return storedTheme ?? 'dark';
  });

  const toggleTheme = () => {
    setTheme((curr) => {
      const newTheme = curr === 'light' ? 'dark' : 'light';
      window.localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
        <Router basename={import.meta.env.BASE_URL}>
          <div className="switch">
            <ReactSwitch
              onChange={toggleTheme}
              checked={theme === 'dark'}
              onColor="#86d3ff"
              onHandleColor="#2693e6"
              handleDiameter={30}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={20}
              width={48}
              className="react-switch"
            />
          </div>
          <UserProvider>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/upload"
                  element={
                    <ProtectedRoute>
                      <Upload />
                    </ProtectedRoute>
                  }
                />
                <Route path="/single" element={<Single />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/example" element={<Example />} />
              </Route>
            </Routes>
          </UserProvider>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;

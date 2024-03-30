import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Forget from './Forget';
function Routeapp() {

    return (
      <>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Navigate to="/signin" replace />} />
              <Route path="/signin" element={<App />} />
              <Route path="/forget" element={<Forget />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
  
  export default Routeapp;
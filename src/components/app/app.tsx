import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../../pages/app-routes';
import React from 'react';

function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

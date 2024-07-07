import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../../pages/app-routes';
import React from 'react';

export function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

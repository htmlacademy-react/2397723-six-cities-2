import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../../pages/app-routes';

type AppProps = {
  placesCount: number;
}

function App({placesCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <AppRoutes placesCount={placesCount}/>
    </BrowserRouter>
  );
}

export default App;

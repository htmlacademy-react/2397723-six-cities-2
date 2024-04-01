import Main from '../../pages/main/main';

type AppProps = {
  placesCount: number;
}

function App({placesCount}: AppProps): JSX.Element {
  // TODO Попробовать react-helmet-async, ретроспектива 3.8 - 1:10:00
  return (
    <Main placesCount={placesCount}/>
  );
}

export default App;

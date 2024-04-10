import MainRouter from './routes/MainRouter';

// Simple app wrapper. Can contain global logic like providers etc.
const App = (): JSX.Element => {
  return (
    <MainRouter/>
  );
};

export default App;

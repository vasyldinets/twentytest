import { HashRouter, Route, Routes } from 'react-router-dom';
import MainView from '../views/MainView';
import CreateView from '../views/CreateView';
import EditView from '../views/EditView';

const MainRouter = (): JSX.Element => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainView/>}/>
        <Route path="/create" element={<CreateView/>}/>
        <Route path="/edit/:id" element={<EditView/>}/>
      </Routes>
    </HashRouter>
  );
};

export default MainRouter;

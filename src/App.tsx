import { Route, Routes } from 'react-router-dom';
import { AdminPage, LoginPage } from './pages';

const App= ()=> {
 
  return (
    <div>
        <Routes>
          <Route path='/' element={<AdminPage />}/>
          <Route path='/login' element={<LoginPage />}/>
        </Routes>
    </div>
  );
}

export default App;

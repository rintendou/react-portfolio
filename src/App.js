import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout';
import Home from './components/home/home'
import AboutMe from './components/about-me/about-me';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about-me' element={<AboutMe />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

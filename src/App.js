import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Data from './components/Data';
import Header from './components/Header';
import Contact from './components/Contact';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<Home/>}></Route>
        <Route path="/data" element={<Data/>} ></Route>
        <Route path="/contact" element={<Contact/>} ></Route>
      </Route>
    )
  )

  return (
    <div className="App">
      <Header/>
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
    <div>
      <Link to="/">Home</Link>
      <Link to="/data">Data</Link>
      </div>
      <div>
        <Outlet/>
      </div>
    </>
  )
}

export default App;

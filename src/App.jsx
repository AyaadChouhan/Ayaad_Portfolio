import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Navbar from './Components/navbar/Navbar';
import Landing from './Components/Landing';
import Contact from './Components/Contact/Contact';
import Details from './Components/Details/Details';
function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Landing />} />
      <Route path='contact' element={<Contact />} />
      <Route path='details' element={<Details />} />
    </Route>
  ))


  return (
    <>
      <div className='bg-[#050304] min-h-screen wrapper  md:pl-[150px] relative'>
        <RouterProvider router={router} />
        <div className='text-[#CFCFCF] absolute bottom-8 w-full left-0 flex justify-center'>
          <span >
            Crafted by Asif Khan
          </span>
        </div>
      </div>
    </>
  )
}

export default App

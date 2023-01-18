import Contact from '../pages/Contact';
import Faq from '../pages/Faq';
import Feature from '../pages/Feature';
import Landing from '../pages/Landing';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Landing page Routes */}
      <Route path="/">
        <Route index element={<Landing />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contactUs" element={<Contact />} />
      </Route>
    </>
  )
)

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;

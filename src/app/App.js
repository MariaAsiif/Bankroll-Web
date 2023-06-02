import AdminLayout from '../components/Layout/AdminLayout/AdminLayout';
import AuditLogs from '../pages/AuditLog';
import CardCenter from '../pages/CardCenter';
import Contact from '../pages/Contact';
import Dashboard from '../pages/Dashboard';
import Faq from '../pages/Faq';
import Faqs from '../pages/Faqs';
import Feature from '../pages/Feature';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import RoleManagement from '../pages/Role';
import UserManagement from '../pages/UserManagement';
import Users from '../pages/Users';
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
        <Route path="/login" element={<Login />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contactUs" element={<Contact />} />
      </Route>

      <Route element={<AdminLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/usermanagment" element={<UserManagement />} />
        <Route path="/usermanagment/role" element={<RoleManagement />} />
        <Route path="/usermanagment/users" element={<Users />} />
        <Route path="/usermanagment/audit" element={<AuditLogs />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/cardCenter" element={<CardCenter />} />

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

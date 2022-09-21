import { createContext, useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Screens/Login/Index";
import { ToastContainer } from "react-toastify";
import Dashboard from './Screens/Dashboard/Index';
import UserList from './Screens/UserList/Index';
import PropertyDetails from './Screens/PropertyDetails/Index'
import ProfessionalList from './Screens/ProfessionalList/Index';
import PropertyList from './Screens/PropertyList/Index';
import NewsfeedList from './Screens/NewsfeedList/Index';
import RequestList from './Screens/RequestList/Index';
import StoryList from './Screens/StoryList/Index';
import PostList from './Screens/PostList/Index';
import Home from './Screens/Home/Index';
import UserProfile from './Screens/UserProfile/Index';
import BecomeProfessional from './Screens/BecomeProfessional/Index';
import EditProfessional from './Screens/BecomeProfessional/BecomePro';
import ProtectedRoute from "./PrivateRoute";
import 'react-alice-carousel/lib/alice-carousel.css';
import Confirmed from './Screens/Confirmed/Index';
import CreateUser from './Screens/CreateUser/Index';
import EditUser from './Screens/EditUser/Index';
import CreateProfessional from './Screens/CreateProfessional/Index';
import Confirmaton from './Screens/Confirmation/Index';
import VerifyOtp from './Screens/VerifyOtp/Index';
import ProfessionalProfile from './Screens/ProfessionalProfile/Index';
import BecomePro2 from './Screens/BecomeProfessional/BecomePro';
import PostDetails from "./Screens/PostDetails/Index";
import PaymentInfo from './Screens/BillSummary/Index';
import PropertyInfo from './Screens/PropertyInfo/Index';

export const SidebarContext = createContext();

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(true);

  const logIn = () => {
    setisLoggedIn(!isLoggedIn);
  };

  const clearCacheData = () => {
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
  };

  useEffect(() => {
    clearCacheData();
  }, [])

  return (
    <SidebarContext.Provider value={{ showSidebar, setShowSidebar }}>
      {/* <Button onClick={logIn
      } variant="primary">{isLoggedIn?'Logout':'Login'}</Button> */}
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <Home />
          </ProtectedRoute>
        }>
          <Route index element={<Dashboard />} />
          <Route path="create-user" element={<CreateUser />} />
          <Route path="user-list" element={<UserList />} />
          <Route path="edit-user/:id" element={<EditUser />} />
          <Route path="user-profile/:id" element={<UserProfile />} />
          <Route path="property-list" element={<PropertyList />} />
          <Route path="property-details/:id" element={<PropertyDetails />} />
          <Route path="create-professional" element={<CreateProfessional />} />
          <Route path="verify-otp" element={<VerifyOtp />} />
          <Route path="become-professional" element={<BecomeProfessional />} />
          <Route path="professional-list" element={<ProfessionalList />} /> 
          <Route path="edit-professional/:id" element={<EditProfessional />} />
          <Route path="professional-profile/:id" element={<ProfessionalProfile />} />
          <Route path="post-list" element={<PostList />} />
          <Route path="post-details/:id" element={<PostDetails />} />
          <Route path="story-list" element={<StoryList />} />
          <Route path="request-list" element={<RequestList />} />
          <Route path="newsfeed-list" element={<NewsfeedList />} />
          <Route path="property-info" element={<PropertyInfo />} />
          <Route path="confirmed" element={<Confirmed />} />
          <Route path="confirmation" element={<Confirmaton />} />
          <Route path="become-pro2" element={<BecomePro2 />} />
          <Route path="bill-info" element={<PaymentInfo />} />
        </Route>
        <Route path="*" element={<h3>Page not Found</h3>} />
      </Routes>
    </SidebarContext.Provider>
  );
}

export default App;

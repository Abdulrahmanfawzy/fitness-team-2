import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthenticationCntextProvider } from "./lib/Cntext/AuthenticationCntext";

// Layoutes
import MainLayout from "./components/layout/MainLayout";
import AuthenticationLayout from "./components/layout/AuthenticationLayout";

// ProtectedRoute
import AuthenticationProtectedRoute from "./components/protectedRoutes/AuthenticationProtectedRoute";
import AppProtectedRoute from "./components/protectedRoutes/AppProtectedRoute";

// pages
import Login from "./pages/Authentication/Login";
import SignUp from "./pages/Authentication/SignUp";
import Packages from "./pages/Packages/Packages";
import Home from "./pages/Home/Home";
import NotFoundPage from "./pages/NotFound/NotFound";
import Trainers from "./pages/Trainers/Trainers";
import Contact from "./pages/Contact/Contact";
import UserProfile from "./pages/Profile/Profile";
import TrainerProfile from "./pages/TrainerProfile/TrainerProfile";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import VerifyEmail from "./pages/Authentication/VerifyEmail";
import ResetPassword from "./pages/Authentication/ResetPassword";
import CompleteProfile from "./pages/Authentication/CompleteProfile";
import Notifications from "./pages/Notifications/Notifications";
import Booking from "./pages/Booking/Booking";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {Toaster} from 'react-hot-toast'

const queryClient = new QueryClient();

function App() {
  const routers = createBrowserRouter([
    {path : "" , element : <MainLayout /> , children : [
      {index : true , element : <AppProtectedRoute> <Home/> </AppProtectedRoute> } , 
      {path : "packages" , element : <AppProtectedRoute> <Packages/> </AppProtectedRoute> } ,
      {path : "trainers" , element : <AppProtectedRoute> <Trainers/> </AppProtectedRoute> } ,
      {path : "contact" , element : <AppProtectedRoute> <Contact/> </AppProtectedRoute> } ,
      {path : "booking" , element : <AppProtectedRoute> <Booking/> </AppProtectedRoute> } ,
      {path : "profile" , element : <AppProtectedRoute> <UserProfile/> </AppProtectedRoute> } ,
      {path : "notifications" , element : <AppProtectedRoute> <Notifications/> </AppProtectedRoute> } ,
      {path : "trainers/:id" , element : <AppProtectedRoute> <TrainerProfile/> </AppProtectedRoute> } ,
      {path : "complete-profile" , element : <AppProtectedRoute><CompleteProfile/></AppProtectedRoute> } ,
      {path : "*" , element : <AppProtectedRoute><NotFoundPage /></AppProtectedRoute> }
    ]} ,
    {path : "" , element : <AuthenticationLayout /> , children : [
      {path : "login" , element : <AuthenticationProtectedRoute><Login/></AuthenticationProtectedRoute> } ,
      {path : "sign-up" , element : <AuthenticationProtectedRoute><SignUp/></AuthenticationProtectedRoute> } ,
      {path : "forgot-password" , element : <AuthenticationProtectedRoute><ForgotPassword/></AuthenticationProtectedRoute> } ,
      {path : "verify" , element : <AuthenticationProtectedRoute><VerifyEmail/></AuthenticationProtectedRoute> } ,
      {path : "reset-password" , element : <AuthenticationProtectedRoute><ResetPassword/></AuthenticationProtectedRoute> } ,
      
    ]} ,
  ])
  return (
    <div className="dark">
      <AuthenticationCntextProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toasterId="default"
            toastOptions={{
              // Define default options
              className: "",
              duration: 5000,
              removeDelay: 1000,
              style: {
                background: "#363636",
                color: "#fff",
              },

              // Default options for specific types
              success: {
                duration: 3000,
                iconTheme: {
                  primary: "green",
                  secondary: "black",
                },
              },
            }}
          />
          <RouterProvider router={routers}></RouterProvider>
        </QueryClientProvider>
      </AuthenticationCntextProvider>
    </div>
  );
}

export default App;

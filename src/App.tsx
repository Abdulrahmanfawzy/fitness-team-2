import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

function App() {

  const routers = createBrowserRouter([
    {path : "" , element : <MainLayout /> , children : [
      {index : true , element : <AppProtectedRoute> <Home/> </AppProtectedRoute> } , 
      {path : "packages" , element : <AppProtectedRoute> <Packages/> </AppProtectedRoute> } ,
      {path : "trainers" , element : <AppProtectedRoute> <Trainers/> </AppProtectedRoute> } ,
      {path : "contact" , element : <AppProtectedRoute> <Contact/> </AppProtectedRoute> } ,
      {path : "profile" , element : <AppProtectedRoute> <UserProfile/> </AppProtectedRoute> } ,
      {path : "trainer-Profile/:id" , element : <AppProtectedRoute> <TrainerProfile/> </AppProtectedRoute> } ,
      {path : "*" , element : <AppProtectedRoute><NotFoundPage /></AppProtectedRoute> }
    ]} ,
    {path : "" , element : <AuthenticationLayout /> , children : [
      {path : "login" , element : <AuthenticationProtectedRoute><Login/></AuthenticationProtectedRoute> } ,
      {path : "sign-up" , element : <AuthenticationProtectedRoute><SignUp/></AuthenticationProtectedRoute> } ,
    ]} ,
  ])
  return (
    <div>
     <RouterProvider router={routers}></RouterProvider>
    </div>
  )
}

export default App
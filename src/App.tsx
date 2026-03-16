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

function App() {

  const routers = createBrowserRouter([
    {path : "" , element : <MainLayout /> , children : [
      {index : true , element : <AppProtectedRoute> <Home/> </AppProtectedRoute> } , 
      {path : "packages" , element : <AppProtectedRoute> <Packages/> </AppProtectedRoute> } ,
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

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import RootLayout from "./layouts/rootLayout";
import HomePage from "./pages/homepage";
import AboutUs from "./pages/about";
import ContactUs from "./pages/contact";
import Shop from "./pages/shop";
import { Provider } from "react-redux";
import store from "./store/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import LoginForm from "./components/login/login";
import LoginSuccess from "./components/login/success/success";
import Account from "./components/account/Account";
import { AuthProvider } from "./contexts/authContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="shop" element={<Shop />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="login" element={<LoginForm />} />
      <Route path="login/success" element={<LoginSuccess />} />
      <Route path="account" element={<Account />} />
    </Route>
  )
);

function App() {
  const clientID=import.meta.env.VITE_GOOGLE_CLIENT_ID;
  return (
    <>
      <GoogleOAuthProvider clientId={clientID}>
        <AuthProvider>
          <Provider store={store}>
            <RouterProvider router={router} />
          </Provider>
        </AuthProvider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
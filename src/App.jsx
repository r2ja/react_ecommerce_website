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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="shop" element={<Shop />} />
      <Route path="contact" element={<ContactUs />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;

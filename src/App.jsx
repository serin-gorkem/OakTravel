import Landing from "./Landing"
import VehicleFeatures from "./VehicleFeatures";
import Extras from "./Extras";
import ErrorPage from "./sections/ErrorPage"
import Details from "./Details";
import Summary from "./Summary";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/vehicle-features",
    element: <VehicleFeatures />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/extras",
    element: <Extras />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/details",
    element: <Details />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/summary",
    element: <Summary />,
    errorElement: <ErrorPage />,
  },

]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

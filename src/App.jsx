import Landing from "./Landing"
import VehicleFeatures from "./VehicleFeatures";
import Extras from "./Extras";
import ErrorPage from "./sections/ErrorPage"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/OakTravel",
    element: <Landing />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/OakTravel/vehicle-features",
    element: <VehicleFeatures />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/OakTravel/extras",
    element: <Extras />,
    errorElement: <ErrorPage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

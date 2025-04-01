import Landing from "./Landing"
import VehicleFeatures from "./VehicleFeatures";
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
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

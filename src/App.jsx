import Landing from "./sections/Landing"
import ErrorPage from "./sections/ErrorPage"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/OakTravel",
    element: <Landing />,
    errorElement: <ErrorPage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

import { lazy, memo, Suspense, useEffect } from "react";
const Home = lazy(() => import("./Home"));

const Landing = memo(function Landing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Suspense
      fallback={
        <h1 className="flex justify-center text-text-white items-center h-screen">
          Loading...
        </h1>
      }
    >
      <Home />
      <section className="h-screen"></section>
    </Suspense>
  );
});
export default Landing;

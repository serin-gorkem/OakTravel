import { lazy, memo, Suspense, useEffect } from "react";
const Home = lazy(() => import("./Home"));
const Nav = lazy(() => import("../components/Nav"));

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
        <Nav isPageNav={true} />
      <section className="h-screen mt-16">
      </section>
      <section className="h-screen bg-amber-900">
      </section>
    </Suspense>
  );
});
export default Landing;

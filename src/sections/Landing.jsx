import { lazy, memo, Suspense } from "react";
const Home = lazy(() => import("./Home"));
const ChooseUs = lazy(() => import("./ChooseUs"));
const Nav = lazy(() => import("../components/Nav"));
const About = lazy(() => import("./About"));
const PageDivider = lazy(() => import("../components/PageDivider"));


const Landing = memo(function Landing() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col justify-between items-center">
          <span className="loading loading-spinner loading-xl w-fit"></span>
        </div>
      }
    >
      <Home />
      {/* <Nav isPageNav={true} /> */}
      <PageDivider/>
      <ChooseUs />
      <PageDivider/>
      <About />
      <PageDivider/>
    </Suspense>
  );
});
export default Landing;

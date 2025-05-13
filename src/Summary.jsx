{
  /* React imports */
}
import { lazy, memo } from "react";

{
  /* Lazy Loadings */
}
const Footer = lazy(() => import("./sections/Footer"));
const Nav = lazy(() => import("./components/Nav"));
const Steps = lazy(() => import("./sections/Steps"));
const PageIndicator = lazy(() => import("./components/PageIndicator"));
const SummaryCard = lazy(() => import("./components/Extras/SummaryCard"));
const ContactSummaryCard = lazy(() =>
  import("./components/Summary/ContactSummaryCard")
);

{
  /* API Keys and images import */
}
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
import CarVitoIMG from "./assets/img/vehicles/vito.webp";
import RideDetails from "./components/Landing/RideDetailsCard";
import { useNavigate } from "react-router";

{
  /* On Form.jsx, there is a submit button and it will push form information to this jsx file and it will be used in Transfer Card  */
}
const Summary = memo(function () {

  
      const navigate = useNavigate();
  
      function navigateToDetails(){
        navigate("/OakTravel/details");
      }
  return (
    <>
      <Nav isBookingPage={true} />
      <div className="flex relative flex-col justify-between lg:block xl:max-w-9/12 lg:max-w-11/12 mx-auto">
        <section className="p-4 md:px-4 flex justify-between flex-col-reverse lg:flex-row-reverse gap-4 w-full lg:px-0 ">
          <aside className="flex flex-col gap-3 xl:w-4/12 lg:w-5/12">
            <SummaryCard
              showItems={false}
              isDetailsPage={false}
              bags={2}
              img={CarVitoIMG}
              vehicleType={"Mercedes Vito"}
            />
            {/* Navigation Buttons */}
            {/* Navigation Buttons */}
            <div className="w-full md:w-1/3 lg:w-full">
              <button
                onClick={navigateToDetails}
                className="btn px-2 md:w-full btn-gray"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                  />
                </svg>
                Personal Details
              </button>
            </div>
          </aside>
          <div className="lg:w-full flex flex-col gap-4">
            <div className=" lg:flex lg:flex-col lg:gap-4">
              {/*For page indicator active functionality, later.*/}
              <PageIndicator activePage={"Details"} />
              <ContactSummaryCard></ContactSummaryCard>
              <RideDetails
                vehicleType={"Mercedes Vito"}
                totalDistance={"20 km"}
                totalTime={"30 min"}
                bags={2}
              />
            </div>
          </div>
        </section>
        <div className="[&>section]:max-w-full">
          <Steps />
        </div>
        <div className="bg-primary h-fit mt-10">
          <Footer />
        </div>
      </div>
    </>
  );
});

export default Summary;

{
  /* React imports */
}
import { lazy, memo, useEffect, useState } from "react";

{
  /* Lazy Loadings */
}
const Footer = lazy(() => import("./sections/Footer"));
const Nav = lazy(() => import("./components/Nav"));
const Steps = lazy(() => import("./sections/Steps"));
const PageIndicator = lazy(() => import("./components/PageIndicator"));
const SummaryCard = lazy(() => import("./components/Extras/SummaryCard"));
import useFormVariables from "./hooks/useGetLocalVariables";

{
  /* API Keys and images import */
}
import { APIProvider, Map } from "@vis.gl/react-google-maps";
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
import CarVitoIMG from "./assets/img/vehicles/vito.webp";
import ExtrasCard from "./components/Extras/ExtrasCard";
import { useNavigate } from "react-router";

{
  /* On Form.jsx, there is a submit button and it will push form information to this jsx file and it will be used in Transfer Card  */
}
const Extras = memo(function () {
  //Get local variables
  const { setFormVariables, getFormVariables } = useFormVariables();
  const localData = getFormVariables();

  const [childSeatNumber, setChildSeatNumber] = useState(
    localData.extras?.childSeatNumber ?? 0
  );
  
  const [flowersNumber, setFlowersNumber] = useState(
    localData.extras?.flowersNumber ?? 0
  );

  const [airportAssistance, setAirportAssistance] = useState(
    localData.extras?.airportAssistance ?? false
  );
  const [wait, setWait] = useState(localData.extras?.wait ?? false);

  console.log(localData.extras);

  function setExtrasVariable() {
    setFormVariables({
      ...localData,
      extras: {
        childSeatNumber,
        flowersNumber,
        airportAssistance,
        wait,
      },
    });
  }

  useEffect(() => {
    setExtrasVariable();
  }, [airportAssistance, wait]);

  function handleAirportAssistance() {
    const newValue = !airportAssistance;
    setAirportAssistance(newValue);
    setExtrasVariable({
      ...localData,
      extras: {
        ...localData.extras,
        airportAssistance : airportAssistance,
      },
    });
    console.log(localData.extras);
  }
  
  function handleWait() {
    const newValue = !wait;
    setWait(newValue);
    setExtrasVariable({
      ...localData,
      extras: {
        ...localData.extras,
        wait : wait,
      },
    });
  }

  function increase(type) {
    switch (true) {
      case type === "child-seat" && childSeatNumber < 2:
        setChildSeatNumber(childSeatNumber + 1);
        break;

      case type === "flowers" && flowersNumber < 3:
        setFlowersNumber(flowersNumber + 1);
        break;

      default:
        break;
    }
  }
  function decrease(type) {
    switch (true) {
      case type === "child-seat" && childSeatNumber > 0:
        setChildSeatNumber(childSeatNumber - 1);
        break;

      case type === "flowers" && flowersNumber > 0:
        setFlowersNumber(flowersNumber - 1);
        break;

      default:
        break;
    }
  }
  const navigate = useNavigate();
  function navigateToVehicleFeatures(){
    navigate("/OakTravel/vehicle-features");
  }

  function navigateToPersonalDetails(){
    navigate("/OakTravel/details");
  }

  return (
    <>
      <Nav isBookingPage={true} />
      <div className="flex relative flex-col justify-between lg:block xl:max-w-9/12 lg:max-w-11/12 mx-auto">
        <section className="p-4 md:px-4 flex justify-between flex-col lg:flex-row-reverse gap-4 w-full lg:px-0 ">
          <div className="lg:hidden block">
            {/* Use switch case to change the page indicator */}
            <PageIndicator activePage={"Details"} />
            <ExtrasCard
              increase={increase}
              decrease={decrease}
              setExtrasVariable={setExtrasVariable}
              childSeatNumber={childSeatNumber}
              flowersNumber={flowersNumber}
              handleAirportAssistance = {handleAirportAssistance}
              handleWait = {handleWait}
            />
          </div>
          <aside className="flex flex-col gap-3 xl:w-4/12 lg:w-5/12">
            <SummaryCard
              localData={localData}
              showItems={true}
              img={CarVitoIMG}
              transferType={"ONE WAY"}
              vehicleType={"Mercedes Vito"}
              totalDistance={"370 km"}
              totalTime={"2h 18m"}
              totalPrice={"219.34 $"}
            />
            {/* Navigation Buttons */}
            <div className="flex md:flex-wrap gap-2 justify-between w-full">
              <button onClick={navigateToVehicleFeatures} className="btn w-5/12 px-0 md:w-full btn-gray">
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
                Vehicle Features
              </button>
              <button onClick={navigateToPersonalDetails} className="btn w-5/12 px-0 md:w-full btn-warning text-base-100">
                Personal Details
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
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </aside>
          <div className="lg:w-full flex flex-col gap-4">
            <div className="hidden lg:flex lg:flex-col lg:gap-4">
              {/*For page indicator active functionality, later.*/}
              <PageIndicator active={"Details"} />
              <ExtrasCard
                increase={increase}
                decrease={decrease}
                setExtrasVariable={setExtrasVariable}
                childSeatNumber={childSeatNumber}
                flowersNumber={flowersNumber}
                handleAirportAssistance = {handleAirportAssistance}
                handleWait = {handleWait}
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

export default Extras;

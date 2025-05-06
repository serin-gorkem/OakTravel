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

{
  /* API Keys and images import */
}
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
import CarVitoIMG from "./assets/img/vehicles/vito.webp";

{
  /* On Form.jsx, there is a submit button and it will push form information to this jsx file and it will be used in Transfer Card  */
}
const Details = memo(function () {
  return (
    <>
      <Nav isBookingPage={true} />
      <div className="flex relative flex-col justify-between lg:block xl:max-w-9/12 lg:max-w-11/12 mx-auto">
        <section className="p-4 md:px-4 flex justify-between flex-col-reverse lg:flex-row-reverse gap-4 w-full lg:px-0 ">
          <aside className="flex flex-col gap-3 xl:w-4/12 lg:w-5/12">
            <SummaryCard
              showItems={true}
              isDetailsPage={true}
              extras={["Baby Seat", "Child Seat"]}
              img={CarVitoIMG}
              title={"Transfer Details"}
              transferType={"ONE WAY"}
              vehicleType={"Mercedes Vito"}
              pickupLocation={
                "Milas–Bodrum Airport (BJV), Bodrum Airport Street, Ekinanbarı, Milas/Muğla"
              }
              dropOffLocation={
                "Adnan Menderes Havalimanı, Dokuz Eylül, Gaziemir/İzmir"
              }
              pickupTime={"13:45 (1:45 pm)"}
              pickupDate={"03 March 2025"}
              pickupPerson={"2"}
              totalDistance={"370 km"}
              totalTime={"2h 18m"}
              totalPrice={"219.34 $"}
            />
            {/* Navigation Buttons */}

          </aside>
          <div className="lg:w-full flex flex-col gap-4">
            <div className=" lg:flex lg:flex-col lg:gap-4">
              {/*For page indicator active functionality, later.*/}
              <PageIndicator activePage={"Details"} />
              <form className="flex flex-col gap-4">
                <div className="md:flex md:justify-between gap-2 ">
                  <fieldset className="fieldset w-full flex focus-within:outline-0">
                    <legend className="font-bold text-sm lg:text-base">
                      First Name <span className="text-warning">*</span>
                    </legend>
                    <input
                      type="text"
                      id="name"
                      autoComplete="given-name"
                      className="bg-base-300 h-10 p-2 w-full shadow-sm lg:text-base"
                      placeholder="First Name"
                      required
                    />
                  </fieldset>
                  <fieldset className="fieldset w-full flex focus-within:outline-0">
                    <legend className="font-bold text-sm lg:text-base">
                      Last Name <span className="text-warning">*</span>
                    </legend>
                    <input
                      type="text"
                      id="name"
                      autoComplete="family-name"
                      className="bg-base-300 h-10 w-full p-2 shadow-sm lg:text-base"
                      placeholder="Last Name"
                      required
                    />
                  </fieldset>
                </div>
                <fieldset className="fieldset flex focus-within:outline-0">
                  <legend className="font-bold text-sm lg:text-base">
                    Phone Number <span className="text-warning">*</span>
                  </legend>
                  <input
                    type="text"
                    id="name"
                    autoComplete="tel"
                    className="bg-base-300 h-10 p-2 w-full shadow-sm lg:text-base"
                    placeholder="+00 000 000 00 00"
                    required
                  />
                </fieldset>

                <fieldset className="fieldset flex focus-within:outline-0">
                  <legend className="font-bold text-sm lg:text-base">
                    Flight Number  <span className="text-warning">*</span>
                  </legend>
                  <input
                    type="text"
                    id="name"
                    autoComplete="number"
                    className="bg-base-300 h-10 p-2 w-full shadow-sm lg:text-base"
                    placeholder="AA1234"
                    required
                  />
                </fieldset>
                <fieldset className="fieldset flex focus-within:outline-0">
                  <legend className="font-bold text-sm lg:text-base">
                    Email
                  </legend>
                  <input
                    type="text"
                    id="name"
                    autoComplete="email"
                    className="bg-base-300 h-10 w-full p-2 shadow-sm lg:text-base"
                    placeholder="Email"
                    required
                  />
                </fieldset>
                <fieldset className="">
                  <legend htmlFor="name" className=" font-bold">
                    Message <span className="text-warning">*</span>
                  </legend>
                  <textarea
                    id="message"
                    className="bg-base-300 h-32 w-full p-2 shadow-sm lg:text-base"
                    placeholder="Leave us a message..."
                    required
                  />
                </fieldset>
              </form>
              <div className="w-fit flex gap-2 justify-between">
                <button className="btn w-16 px-0 md:w-full btn-gray">
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
                  Extras
                </button>
                <button className="btn w-16 px-0 md:w-full btn-warning text-base-100">
                  Booking Summary
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

export default Details;

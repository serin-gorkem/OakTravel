{
    /* React imports */
  }
  import { lazy, memo } from "react";
  
  {
    /* Lazy Loadings */
  }
  const Footer = lazy(() => import("./sections/Footer"));
  const TransferSummaryCard = lazy(() =>
    import("./components/TransferSummaryCard")
  );
  const Nav = lazy(() => import("./components/Nav"));
  const Steps = lazy(() => import("./sections/Steps"));
  const PageIndicator = lazy(() => import("./components/PageIndicator"));
  const ExtrasSummaryCard = lazy(() =>
    import("./components/ExtrasSummaryCard")
  );
  
  {
    /* API Keys and images import */
  }
  import { APIProvider, Map } from "@vis.gl/react-google-maps";
  const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
  import CarVitoIMG from "./assets/img/vehicles/vito.webp";
import ExtrasCard from "./components/ExtrasCard";
  
  {
    /* On Form.jsx, there is a submit button and it will push form information to this jsx file and it will be used in Transfer Card  */
  }
  const VehicleFeatures = memo(function () {
    return (
      <>
        <Nav isBookingPage={true} />
        <div className="flex relative flex-col justify-between lg:block xl:max-w-9/12 lg:max-w-11/12 mx-auto">
          <section className="p-4 md:px-4 flex justify-between flex-col lg:flex-row-reverse gap-4 w-full lg:px-0 ">
            <div className="lg:hidden block">
            {/* Use switch case to change the page indicator */}
              <PageIndicator activePage={"Extras"} />
              <ExtrasCard/>
            </div>
            <aside className="flex flex-col gap-3 xl:w-4/12 lg:w-5/12">
            <ExtrasSummaryCard
                img={CarVitoIMG}
                transferType={"ONE WAY"}
                vehicleType={"Mercedes Vito"}
                pickupLocation={"Milas–Bodrum Airport (BJV), Bodrum Airport Street, Ekinanbarı, Milas/Muğla"}
                dropOffLocation={"Adnan Menderes Havalimanı, Dokuz Eylül, Gaziemir/İzmir"}
                pickupTime={"13:45 (1:45 pm)"}
                pickupDate={"03 March 2025"}
                pickupPerson={"2"}
                totalDistance={"370 km"}
                totalTime={"2h 18m"}
                totalPrice={"219.34 $"}
              />
            </aside>
            <div className="lg:w-full flex flex-col gap-4">
              <div className="hidden lg:block">
                <PageIndicator />
                <ExtrasCard/>
              </div>
            </div>
          </section>
          <div className="[&>section]:max-w-full">
            <Steps />
          </div>
          <div className="bg-primary h-fit">
            <Footer />
          </div>
        </div>
      </>
    );
  });
  
  export default VehicleFeatures;
  
import { lazy, memo } from "react";
import TransferCard from "./components/TransferCard";
const Nav = lazy(() => import("./components/Nav"));
const PageIndicator = lazy(() => import("./components/PageIndicator"));
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import VehicleFeaturesCard from "./components/VehicleFeaturesCard";
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
import CarVitoIMG from "./assets/img/vehicles/vito.webp";

const VehicleFeatures = memo(function () {
  return (
    <>
      <Nav isBookingPage={true} />
      <div className="flex justify-between lg:block xl:max-w-9/12 lg:max-w-11/12 mx-auto">
        <section className="p-2 md:px-4 flex justify-between flex-col lg:flex-row-reverse gap-4 w-full lg:px-0 ">
        <aside className="xl:w-3/12 lg:w-5/12">
            <TransferCard
              from_destination="Bodrum Airport (BJV)"
              from_city="Bodrum,Turkey"
              to_destination="Adnan Menderes Airport (ADB)"
              to_city="Izmir, Turkey"
              departure_date="03 March 2025"
              departure_hour="13:45 (1:45 pm)"
              return_date="06 March 2025"
              return_hour="11:45 (11:45 am)"
              outward_count={2}
              return_count={2}
              total_distance={189}
              total_hour="2h 43m"
            />
          </aside>
          <div className="lg:w-full flex flex-col gap-4 ">
            <PageIndicator />
            {/* <APIProvider apiKey={API_KEY}>
              <Map
                defaultCenter={{ lat: 22.54992, lng: 0 }}
                className="hidden lg:block"
                defaultZoom={3}
                gestureHandling={"greedy"}
                disableDefaultUI={true}
              />
            </APIProvider> */}
            <VehicleFeaturesCard
              img={CarVitoIMG}
              vehicleName={"Mercedes Vito"}
              person={8}
              bags={4}
              features = {["Airport Welcome","Flight Tracker","Disinfection","Door To Door","No Hidden Costs","Passenger Insurance","Your Special Vehicle"]}
              price={"219.34 $"}
            />
          </div>

        </section>
      </div>
    </>
  );
});

export default VehicleFeatures;

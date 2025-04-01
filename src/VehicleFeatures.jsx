import { lazy, memo } from "react";
import TransferCard from "./components/TransferCard";
const Nav = lazy(() => import("./components/Nav"));
const PageIndicator = lazy(() => import("./components/PageIndicator"));

const VehicleFeatures = memo(function () {
  return (
    <>
      <Nav isBookingPage={true} />
      <div className="flex justify-between xl:max-w-9/12  lg:max-w-11/12 mx-auto">
      <section className="p-2 md:px-4 flex flex-col gap-4 mb-24 w-full lg:px-0 ">
        <PageIndicator />
        <div className="lg:hidden">
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
        </div>
      </section>
        <aside className="hidden p-2 px-2 lg:block w-1/3">
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
      </div>
    </>
  );
});

export default VehicleFeatures;

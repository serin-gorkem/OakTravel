import { lazy, memo } from "react";

const VehicleCard = lazy(() => import("../components/VehicleCard"));
import CarVitoIMG from "../assets/img/vehicles/vito.webp";

const Vehicles = memo(function () {
  return (
    <section
      id="vehicles"
      className="h-fit mt-16 px-2 pb-8 flex flex-col lg:p-0 xl:max-w-9/12 lg:max-w-11/12 mx-auto flex-wrap gap-4"
    >
      <figure className="flex flex-col gap-2.5">
        <figcaption className="text-xl lg:text-2xl text-warning font-bold font-heading leading-tight">
          Our Vehicles
        </figcaption>
        <h1 className="text-2xl lg:text-4xl font-bold opacity-85">
          Maximum Confort and safety for your trip
        </h1>
        <h2 className=" text-xl font-medium opacity-70">
          Licensed vehicles, professional drivers
        </h2>
      </figure>
      <div className="flex gap-6 flex-wrap">
        <VehicleCard
          img={CarVitoIMG}
          text="Mercedes Vito"
          personCount="7 Person"
          bagsCount="6 bags"
          specs={[
            "Airport Service",
            "Flight Tracker",
            "Disinfection",
            "Door To Door",
            "No Hidden Costs",
          ]}
        />
        <VehicleCard
          img={CarVitoIMG}
          text="Mercedes Vito"
          personCount="7 Person"
          bagsCount="6 bags"
          specs={[
            "Airport Service",
            "Flight Tracker",
            "Disinfection",
            "Door To Door",
            "No Hidden Costs",
          ]}
        />
        <VehicleCard
          img={CarVitoIMG}
          text="Mercedes Vito"
          personCount="7 Person"
          bagsCount="6 bags"
          specs={[
            "Airport Service",
            "Flight Tracker",
            "Disinfection",
            "Door To Door",
            "No Hidden Costs",
          ]}
        />
        <VehicleCard
          img={CarVitoIMG}
          text="Mercedes Vito"
          personCount="7 Person"
          bagsCount="6 bags"
          specs={[
            "Airport Service",
            "Flight Tracker",
            "Disinfection",
            "Door To Door",
            "No Hidden Costs",
          ]}
        />
        <VehicleCard
          img={CarVitoIMG}
          text="Mercedes Vito"
          personCount="7 Person"
          bagsCount="6 bags"
          specs={[
            "Airport Service",
            "Flight Tracker",
            "Disinfection",
            "Door To Door",
            "No Hidden Costs",
          ]}
        />
        <VehicleCard
          img={CarVitoIMG}
          text="Mercedes Vito"
          personCount="7 Person"
          bagsCount="6 bags"
          specs={[
            "Airport Service",
            "Flight Tracker",
            "Disinfection",
            "Door To Door",
            "No Hidden Costs",
          ]}
        />
      </div>
    </section>
  );
});

export default Vehicles;

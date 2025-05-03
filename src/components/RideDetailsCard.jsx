import { memo } from "react";

const RideDetails = memo(function (props) {
  return (
    <article className="flex flex-col relative gap-4 p-6 bg-base-300 w-full md:flex-1/2 lg:flex-1/4 card-xl shadow-xl">
      <div className="map"></div>
      <div className="relative">
      <div className="border-2 border-gray rounded-box p-1 px-8 cursor-pointer right-5 top-5 absolute flex flex-col gap-2">
                <p>Edit</p>
            </div>
        <h1 className="text-2xl md:text-4xl my-3"> {props.title} </h1>
        <div className="flex flex-col">
          <h2 className="title mb-1">TRANSFER TYPE</h2>
          <p className="section-text font-bold">{props.transferType}</p>
        </div>
        <div className="divider my-1"></div>
        <div className="flex flex-col">
          <h2 className="title mb-1">VEHICLE</h2>
          <p className="section-text font-bold">{props.vehicleType}</p>
        </div>
        <div className="divider my-1"></div>
        <div className="flex flex-col">
          <h2 className="title mb-1">PICKUP LOCATION</h2>
          <p className="section-text font-bold">{props.pickupLocation}</p>
        </div>
        <div className="divider my-1"></div>
        <div className="flex flex-col">
          <h2 className="title mb-1">DROP OFF LOCATION</h2>
          <p className="section-text font-bold">{props.dropOffLocation}</p>
        </div>
        <div className="divider my-1"></div>
        <div className="flex flex-col">
          <h2 className="title mb-1">PICKUP DATE, TIME</h2>
          <div className="flex flex-wrap gap-2">
            <p className="section-text font-bold">{props.pickupTime}</p>
            <p className="section-text font-bold">{props.pickupDate}</p>
            <p className="section-text font-bold">
              {props.pickupPerson} Person
            </p>
          </div>
        </div>
        <div className="divider my-1"></div>
        <div className="flex flex-col">
          <h2 className="title mb-1">Extras</h2>
          <div className="flex flex-wrap gap-2">
            {props.extras.map((extra, index) => (
              <div key={index} className="section-text font-bold">
                {extra}
              </div>
            ))}
          </div>
        </div>
        <div className="divider my-1"></div>
        <div className="flex gap-2 justify-between">
          <div className="flex flex-col w-1/2">
            <h2 className="title mb-1">TOTAL DISTANCE</h2>
            <p className="section-text font-bold">{props.totalDistance}</p>
            <div className="divider my-1"></div>
          </div>
          <div className="flex w-1/2 flex-col">
            <h2 className="title mb-1">TOTAL TIME</h2>
            <p className="section-text font-bold">{props.totalTime}</p>
            <div className="divider my-1"></div>
          </div>
        </div>
        <div className="flex justify-between">
          <h2 className="title text-2xl mb-1">TOTAL</h2>
          <p className="section-text text-xl font-bold">{props.totalPrice}</p>
        </div>
      </div>
    </article>
  );
});

export default RideDetails;

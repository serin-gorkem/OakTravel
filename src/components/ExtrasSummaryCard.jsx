import { memo } from "react";

const ExtrasSummaryCard = memo(function (props) {
  return (
    <article className="bg-base-300 rounded-box shadow-md flex gap-4 flex-col px-3 py-4 ">
      <img src={props.img} className="w-3/4"></img>
      <div>
        <h1 className="text-2xl md:text-4xl my-3"> Summary </h1>
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
            <p className="section-text font-bold">{props.pickupPerson} Person</p>
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

export default ExtrasSummaryCard;

import { memo } from "react";
import { HashLink as Link } from "react-router-hash-link";

const PageIndicator = memo(function () {
  return (
    <ul className="flex w-full items-center justify-between rounded-box bg-base-300 mb-3 px-2 py-4 md:px-4">
      <Link to="/OakTravel/vehicle-features">
        <Step page="Vehicle" active={"border-warning [&>div]:bg-warning"} />
      </Link>
      <span className="md:grow-1 grow-0 border-gray border-b-2 m-1 mb-7"></span>
      <Link to="/OakTravel/Extras">
        <Step page="Extras"/>
      </Link>
      <span className="md:grow-1 grow-0 border-gray border-b-2 m-1 mb-7"></span>
      <Link to="/OakTravel/Details">
        <Step page="Details"/>
      </Link>
      <span className="md:grow-1 grow-0 border-gray border-b-2 m-1  mb-7"></span>
      <Link to="/OakTravel/Summary">
        <Step page="Summary"/>
      </Link>
    </ul>
  );
});

function Step(props) {
  return (
    <li className="flex flex-col cursor-pointer items-center">
      <div
        className={`border-gray ${props.active} border-1 size-8 flex items-center justify-center rounded-sm`}
      >
        <div className={`size-4  bg-gray rounded-sm`}></div>
      </div>
      <h1>{props.page}</h1>
    </li>
  );
}

export default PageIndicator;

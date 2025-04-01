import { memo } from "react";

const PageIndicator = memo(function () {
  return (
    <ul className="flex w-full items-center justify-between rounded-box bg-base-300 px-2 py-4 md:px-4">
      <Step page="Vehicle" active={"border-warning [&>div]:bg-warning"} />
      <span className="md:grow-1 grow-0 border-gray border-b-2 m-1 mb-7"></span>
      <Step page="Extras" />
      <span className="md:grow-1 grow-0 border-gray border-b-2 m-1 mb-7"></span>
      <Step page="Details" />
      <span className="md:grow-1 grow-0 border-gray border-b-2 m-1  mb-7"></span>
      <Step page="Summary" />
    </ul>
  );
});

function Step(props) {
  return (
    <li className="flex flex-col items-center">
      <div className={`border-gray ${props.active} border-1 size-8 flex items-center justify-center rounded-sm`}>
        <div className={`size-4  bg-gray rounded-sm`}></div>
      </div>
      <h1>{props.page}</h1>
    </li>
  );
}

export default PageIndicator;

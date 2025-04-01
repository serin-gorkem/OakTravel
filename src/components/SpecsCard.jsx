import { memo } from "react";

const SpecsCard = memo(function (props) {
  return (
    <article className="bg-base-300 rounded-box shadow-md flex md:flex-1/3 lg:flex-1/4 flex-col p-4">
      <figure className="flex flex-col justify-baseline gap-2">
        {props.svg}
        <figcaption className="text-xl font-bold">{props.title}</figcaption>
        <p className="text-sm">{props.text}</p>
      </figure>
    </article>
  );
});

export default SpecsCard;

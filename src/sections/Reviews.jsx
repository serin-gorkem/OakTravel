import { memo } from "react";
import ReviewCard from "../components/ReviewCard";
import Tripadvisor from "../assets/img/Tripadvisor-Logo.webp";
import Stars from "../components/Stars";

const Reviews = memo(function () {
  const reviewList = reviewInfo.map((element) => {
    return (
      <ReviewCard
        key={element.id}
        title={element.title}
        name={element.name}
        business={element.business}
        review={element.review}
      />
    );
  });
  return (
    <section id="reviews" className="h-fit px-2 mt-16 flex flex-col flex-wrap gap-4 lg:p-0 xl:max-w-9/12 lg:max-w-11/12 mx-auto sm:gap-8">
      <figure className="flex flex-col gap-2.5 sm:gap-4 pb-8 ">
        <figcaption className="text-xl lg:text-2xl text-warning font-bold font-heading leading-tight">
          Reviews
        </figcaption>
        <h1 className=" text-2xl lg:text-4xl font-bold opacity-85">
          See what our customers said
        </h1>
      </figure>
      <div className="flex gap-2 pb-8">
        <button aria-label="change reviews left" className="btn btn-circle text-warning w-14 h-14 shadow-md">
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
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button aria-label="change reviews right" className="btn btn-circle text-warning w-14 h-14 shadow-md">
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
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col flex-wrap lg:flex-row gap-5">
        {reviewList}
      </div>
      <div className="bg-base-300 rounded-box shadow-md flex flex-col lg:flex-row lg:items-center lg:justify-between  p-4 w-full">
          <div className="flex flex-col">
          <h5 className="text-xl">
            Our customers say
            <span className="font-bold"> Excellent</span>
          </h5>
          <div className="flex items-center">
            <img
              src={Tripadvisor}
              alt="tripadvisor logo"
              loading="lazy"
              className="w-24 bg-cover bg-center"
            ></img>
            <div className="flex">
              <Stars starCount={5} />
            </div>
          </div>
        </div>
        <button aria-label="tripadvisor site link" className="btn btn-primary hover:bg-white hover:text-primary w-64">Review Us On Tripadvisor</button>
      </div>
    </section>
  );
});

const reviewInfo = [
  {
    id: 0,
    title: "Always in time",
    name: "Sarah L.",
    business: "Business Traveler",
    review:
      "I had an amazing experience with Oak Travel! The booking process was simple, and the driver arrived on time. The vehicle was clean, comfortable, and spacious. I felt safe throughout the ride, and the driver was very professional. Highly recommend Oak Travel for anyone needing reliable airport transfers!",
  },
  {
    id: 1,
    title: "Always in time",
    name: "John D.",
    business: "Frequent Traveler",
    review:
      "Oak Travel made my airport transfer seamless and stress-free. The booking process was quick, the driver was punctual, and the ride was incredibly comfortable. I’ll definitely use this service again!",
  },
  {
    id: 2,
    title: "Definitely Choose V-Class Vito",
    name: "Maria Singh",
    business: "Business Traveler",
    review:
      "I made an online reservation for our transfer from Bodrum airport to our hotel. Our transfer was completed without any problems. The driver arrived early. We were satisfied. The vehicle quality is excellent, definitely choose the V Class Vito...",
  },
  {
    id: 3,
    title: "Always in time",
    name: "Sarah L.",
    business: "Business Traveler",
    review:
      "I had an amazing experience with Oak Travel! The booking process was simple, and the driver arrived on time. The vehicle was clean, comfortable, and spacious. I felt safe throughout the ride, and the driver was very professional. Highly recommend Oak Travel for anyone needing reliable airport transfers!",
  },
  {
    id: 4,
    title: "Always in time",
    name: "John D.",
    business: "Frequent Traveler",
    review:
      "Oak Travel made my airport transfer seamless and stress-free. The booking process was quick, the driver was punctual, and the ride was incredibly comfortable. I’ll definitely use this service again!",
  },
];

export default Reviews;

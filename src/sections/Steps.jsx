import { memo } from "react";
import step_1 from "../assets/svgs/step_1.svg";
import step_2 from "../assets/svgs/step_2.svg";
import step_3 from "../assets/svgs/step_3.svg";
import step_4 from "../assets/svgs/step_4.svg";

const Steps = memo(function () {
  return (
    <section id="steps" className="h-fit mt-16 px-2 pb-8 flex flex-col lg:p-0 lg:max-w-9/12 mx-auto gap-8 lg:gap-16">
      <figure className="flex flex-col gap-2.5">
        <figcaption className="text-xl lg:text-2xl text-warning font-bold font-heading leading-tight">
          How to book your ride
        </figcaption>
        <h1 className="text-2xl lg:text-4xl font-bold opacity-85">
          Book in Four Simple Steps
        </h1>
      </figure>
      <article className="flex flex-col gap-8 lg:gap-24">
        <Step svg={step_1} title="Step 1: Fill out the Form" text="Select your 📍pickup & drop-off locations, 🗓️ travel date, 👥 number of passengers, and add a 🔄 return trip if needed. Oak Travel makes booking seamless and stress-free." direction="" />
        <Step svg={step_2} title="Step 2: Choose Your Vehicle" text="Browse our 🚖 luxury, 💼 business, and 💲 economy airport transfer vehicles. Each option includes detailed features, ✅ transparent pricing, and unmatched comfort to fit your needs." direction="md:flex-row-reverse" />
        <Step svg={step_3} title="Step 3: Enhance Your Ride" text="Customize your airport transfer with ✨ extra services, such as 👶 child seats, 🧳 additional luggage space, or ⭐ VIP chauffeur service for a premium travel experience." direction="" />
        <Step svg={step_4} title="Step 4: Secure & Instant Confirmation" text="Enter your 🔐 personal details, confirm your ✅ booking, and receive 📩 instant confirmation. With 🕒 24/7 Owl Travel support, your airport transfer is always reliable and hassle-free." direction="md:flex-row-reverse" />
      </article>
    </section>
  );
});

function Step(props) {
    console.log(props.direction);
    
  return (
    <div className={`w-full flex flex-col md:flex-row ${props.direction} justify-between gap-8 xl:gap-32`}>
      <img src={props.svg} alt="Fill out the Form" className="h-64  lg:h-64 xl:h-96" />
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl xl:text-3xl">{props.title}</h2>
        <p className="text-xl lg:text-2xl">{props.text}</p>
      </div>
    </div>
  );
}

export default Steps;

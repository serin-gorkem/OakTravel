import Nav from "../components/Nav";
import Tripadvisor from "../assets/img/Tripadvisor-Logo.png";
import Form from "../components/Form";

function Home() {
  const star = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="oklch(76% 0.177 163.223)"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="oklch(76% 0.177 163.223)"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    </svg>
  );

  const stars = Array.from({ length: 5 }, () => star);

  return (
    <section className="h-screen flex flex-col ">
      <Nav />
      <div
        className="bg-[url(./assets/img/Home-BG.jpg)] fixed w-full bg-center bg-cover brightness-30 h-11/12"
        alt="backgroundImage"
      ></div>
      <article
        id="above-the-fold"
        className="p-2 flex flex-col xl:flex-row gap-4 z-10 lg:max-w-9/12 mx-auto"
      >
        <div className="flex flex-col gap-4">
          <h1 className="font-heading font-bold tracking-tight leading-snug text-2xl text-base-100">
            Reliable <span className=" text-warning ">Airport Transport. </span>
            Comfort & Punctuality with Oak Travel.
          </h1>
          <h2 className="font-paragraph text-xs font-light text-white opacity-90 w-fit leading-relaxed tracking-tighter">
            Experience stress-free airport transfers with Oak Travel. Whether
            you're heading to or from the airport, we provide safe, comfortable,
            and on-time rides tailored to your needs. Choose from luxury,
            business, or economy vehicles, enjoy transparent pricing, and rely
            on our professional drivers for a seamless journey.
          </h2>
          <button className="btn btn-md lg:btn-lg xl:btn-xl w-fit font-paragraph self-baseline">
            How to book your ride
          </button>
        </div>
        <div className="relative sm:max-w-96 w-full">
          <Form />
          <div className="absolute bg-base-300 rounded-box h-16 w-10/12 left-1/2 -translate-x-1/2 -bottom-13 pt-2 px-2 -z-10 flex justify-between items-center">
            <img src={Tripadvisor} className="w-1/2 bg-cover bg-center"></img>
            <div className="flex">{stars}</div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Home;

import Nav from "../components/Nav";

function Home() {
  return (
    <section className="h-screen flex flex-col">
      <Nav />
      <div
        className="bg-[url(./assets/img/Home-BG.jpg)] fixed w-full -z-10  bg-center bg-cover brightness-50 h-11/12"
        alt="backgroundImage"
      ></div>
      <article id="above-the-fold" className="p-2 flex flex-col justify-between">
        <h1 className="font-heading text-3xl text-secondary">
          Reliable <span className=" text-main ">Airport Transport.</span>  Comfort & Punctuality with Oak Travel.
        </h1>
        <h2 className=" font-paragraph text-xs font-light text-white w-fit">
          Experience stress-free airport transfers with Oak Travel. Whether
          you're heading to or from the airport, we provide safe, comfortable,
          and on-time rides tailored to your needs. Choose from luxury,
          business, or economy vehicles, enjoy transparent pricing, and rely on
          our professional drivers for a seamless journey.
        </h2>
      </article>
    </section>
  );
}

export default Home;
